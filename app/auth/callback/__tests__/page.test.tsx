import { render, screen, waitFor } from '@testing-library/react';
import AuthCallbackPage from '../page';
import { checkEmailLink as isEmailLink, signInWithEmail } from '@/lib/firebase';

// Mock the Firebase functions
jest.mock('@/lib/firebase');
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('AuthCallbackPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Mock localStorage
    Storage.prototype.getItem = jest.fn();
    Storage.prototype.removeItem = jest.fn();
  });

  it('should show loading state initially', () => {
    render(<AuthCallbackPage />);
    expect(screen.getByText(/인증 처리 중/i)).toBeInTheDocument();
  });

  it('should handle successful authentication', async () => {
    // Mock successful email link check and sign in
    (isEmailLink as jest.Mock).mockReturnValue(true);
    (Storage.prototype.getItem as jest.Mock).mockReturnValue('test@example.com');
    (signInWithEmail as jest.Mock).mockResolvedValueOnce({});

    render(<AuthCallbackPage />);

    await waitFor(() => {
      expect(screen.getByText(/로그인 성공/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /메인으로 이동/i })).toBeInTheDocument();
    });

    expect(Storage.prototype.removeItem).toHaveBeenCalledWith('emailForSignIn');
  });

  it('should handle authentication error', async () => {
    // Mock failed authentication
    (isEmailLink as jest.Mock).mockReturnValue(true);
    (Storage.prototype.getItem as jest.Mock).mockReturnValue('test@example.com');
    (signInWithEmail as jest.Mock).mockRejectedValueOnce(new Error('Auth failed'));

    render(<AuthCallbackPage />);

    await waitFor(() => {
      expect(screen.getByText(/로그인에 실패했습니다/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /메인으로 돌아가기/i })).toBeInTheDocument();
    });
  });

  it('should prompt for email if not found in localStorage', async () => {
    // Mock window.prompt
    const mockPrompt = jest.spyOn(window, 'prompt');
    mockPrompt.mockReturnValue('test@example.com');

    (isEmailLink as jest.Mock).mockReturnValue(true);
    (Storage.prototype.getItem as jest.Mock).mockReturnValue(null);
    (signInWithEmail as jest.Mock).mockResolvedValueOnce({});

    render(<AuthCallbackPage />);

    await waitFor(() => {
      expect(mockPrompt).toHaveBeenCalledWith('이메일을 입력해주세요.');
      expect(screen.getByText(/로그인 성공/i)).toBeInTheDocument();
    });

    mockPrompt.mockRestore();
  });
});