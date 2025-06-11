'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/contexts/AuthContext';
import { goToChat, goToLogin } from '@/utils/navigation';

export default function HomePage(): React.ReactElement {
  const { isAuthenticated } = useAuthContext();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-purple-900 mb-4">
            My Chat App에 오신 것을 환영합니다
          </h1>
          <p className="text-xl text-purple-700 mb-8">
            실시간으로 대화하고, 연결하고, 소통하세요
          </p>
          <button
            onClick={() => {
              if (isAuthenticated) {
                goToChat(router);
              } else {
                goToLogin(router);
              }
            }}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
              채팅 시작하기
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">
            주요 기능
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">
                실시간 채팅
              </h3>
              <p className="text-purple-700">
                실시간으로 메시지를 주고받으며 즉각적인 소통이 가능합니다.
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">
                간편한 로그인
              </h3>
              <p className="text-purple-700">
                이메일 링크를 통한 간편한 인증으로 빠르게 시작하세요.
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">
                사용자 프로필
              </h3>
              <p className="text-purple-700">
                개인화된 프로필로 나만의 공간을 만들어보세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}