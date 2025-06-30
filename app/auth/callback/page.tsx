'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { checkEmailLink as isEmailLink, signInWithEmail } from '@/lib/firebase';
import { goToMain } from '@/utils/navigation';

export default function AuthCallbackPage(): React.ReactElement {
  const router = useRouter();
  const [error, setError] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(true);
  const processedRef = useRef(false); // 중복 실행 방지

  useEffect(() => {
    const processAuth = async (): Promise<void> => {
      if (typeof window === 'undefined') return;
      if (processedRef.current) return; // 이미 처리했으면 실행하지 않음
      processedRef.current = true;

      if (isEmailLink(window.location.href)) {
        let email = window.localStorage.getItem('emailForSignIn');

        if (!email) {
          email = window.prompt('이메일을 입력해주세요.') || '';
        }

        if (email) {
          try {
            await signInWithEmail(email, window.location.href);
            window.localStorage.removeItem('emailForSignIn');
            setIsProcessing(false);
          } catch (error) {
            console.error('Email link sign in error:', error);
            setError('로그인에 실패했습니다. 다시 시도해주세요.');
            setIsProcessing(false);
          }
        }
      }
    };

    processAuth();
  }, []);

  const handleReturnToMain = (): void => {
    goToMain(router);
  };

  if (isProcessing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-purple-900">인증 처리 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-purple-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={handleReturnToMain}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            메인으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-purple-900 mb-4">로그인 성공!</h1>
        <p className="text-gray-600 mb-6">인증이 완료되었습니다. 메인 페이지로 이동합니다.</p>
        <button
          onClick={handleReturnToMain}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          메인으로 이동
        </button>
      </div>
    </div>
  );
}