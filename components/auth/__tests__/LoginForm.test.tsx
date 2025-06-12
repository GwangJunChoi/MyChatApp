import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from '../LoginForm';
import { useAuthContext } from '@/contexts/AuthContext';
import { sendLoginLink } from '@/lib/firebase';
import * as navigation from 'next/navigation';

// Mock the hooks and functions
jest.mock('@/contexts/AuthContext');
jest.mock('@/lib/firebase');
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe('LoginForm', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
    // Mock useAuthContext
    (useAuthContext as jest.Mock).mockReturnValue({
      user: null,
      loading: false,
      isAuthenticated: false,
    });
  });

  it('should render login form correctly', () => {
    render(<LoginForm />);

    expect(screen.getByLabelText(/이메일/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /로그인 링크 받기/i })).toBeInTheDocument();
  });

  it('should show error message for invalid email', async () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText(/이메일/i);
    const form = emailInput.closest('form');

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.submit(form!);

    expect(await screen.findByText(/유효한 이메일 주소를 입력해주세요/i)).toBeInTheDocument();
  });

  it('should send login link for valid email', async () => {
    // Mock successful login link sending
    (sendLoginLink as jest.Mock).mockResolvedValueOnce(undefined);

    render(<LoginForm />);

    const emailInput = screen.getByLabelText(/이메일/i);
    const submitButton = screen.getByRole('button', { name: /로그인 링크 받기/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(sendLoginLink).toHaveBeenCalledWith(
        'test@example.com',
        expect.objectContaining({
          url: expect.any(String),
          handleCodeInApp: false,
        })
      );
      expect(screen.getByText(/로그인 링크가 이메일로 전송되었습니다/i)).toBeInTheDocument();
    });
  });

  it('should show error message when login link sending fails', async () => {
    // Mock failed login link sending
    (sendLoginLink as jest.Mock).mockRejectedValueOnce(new Error('Failed to send email'));

    render(<LoginForm />);

    const emailInput = screen.getByLabelText(/이메일/i);
    const submitButton = screen.getByRole('button', { name: /로그인 링크 받기/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/이메일 전송에 실패했습니다/i)).toBeInTheDocument();
    });
  });

  it('should redirect to main page if user is already authenticated', () => {
    const mockPush = jest.fn();
    (useAuthContext as jest.Mock).mockReturnValue({
      user: { email: 'test@example.com' },
      loading: false,
      isAuthenticated: true,
    });
    (navigation.useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    render(<LoginForm />);

    expect(mockPush).toHaveBeenCalledWith('/');
  });
});