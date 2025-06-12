'use client';

import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { sendLoginLink } from '@/lib/firebase';
import { useAuthContext } from '@/contexts/AuthContext';
import { goToMain } from '@/utils/navigation';

interface LoginFormState {
  email: string;
  error: string;
  loading: boolean;
  message: string;
}

interface ActionCodeSettingsType {
  url: string;
  handleCodeInApp: boolean;
}

export default function LoginForm(): React.ReactElement {
  const { user, loading } = useAuthContext();
  const router = useRouter();
  const [formState, setFormState] = useState<LoginFormState>({
    email: '',
    error: '',
    loading: false,
    message: ''
  });

  // 이미 로그인한 사용자는 메인 페이지로 리다이렉트
  useEffect(() => {
    if (user) {
      goToMain(router);
    }
  }, [user, router]);

  const actionCodeSettings: ActionCodeSettingsType = {
    url: typeof window !== 'undefined'
      ? `${window.location.origin}/auth/callback`
      : '',
    handleCodeInApp: false,
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormState(prev => ({ ...prev, email: e.target.value }));
  };

  const handleEmailLinkLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, error: '', message: '', loading: true }));

    // 이메일 유효성 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setFormState(prev => ({
        ...prev,
        error: '유효한 이메일 주소를 입력해주세요',
        loading: false
      }));
      return;
    }

    try {
      await sendLoginLink(formState.email, actionCodeSettings);

      setFormState(prev => ({
        ...prev,
        message: '로그인 링크가 이메일로 전송되었습니다. 이메일을 확인해주세요.'
      }));

      window.localStorage.setItem('emailForSignIn', formState.email);
    } catch (error) {
      console.error('Email link error:', error);
      setFormState(prev => ({
        ...prev,
        error: '이메일 전송에 실패했습니다. 다시 시도해주세요.'
      }));
    } finally {
      setFormState(prev => ({ ...prev, loading: false }));
    }
  };

  // 로딩 중일 때 표시할 UI
  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600">로딩 중...</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleEmailLinkLogin} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            이메일
          </label>
          <input
            type="email"
            id="email"
            value={formState.email}
            onChange={handleEmailChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        {formState.error && <p className="text-red-500 text-sm">{formState.error}</p>}
        {formState.message && <p className="text-green-500 text-sm">{formState.message}</p>}
        <button
          type="submit"
          disabled={formState.loading}
          className="w-full rounded-md bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 transition-colors"
        >
          {formState.loading ? '처리 중...' : '로그인 링크 받기'}
        </button>
      </form>

      <div className="text-center text-sm text-gray-500">
        <p>이메일로 전송된 링크를 클릭하여 로그인하세요.</p>
        <p className="mt-2">비밀번호가 필요하지 않습니다.</p>
      </div>
    </div>
  );
}