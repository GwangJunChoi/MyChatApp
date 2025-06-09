import { Metadata } from 'next';
import React from 'react';
import LoginForm from '@/components/auth/LoginForm';

export const metadata: Metadata = {
  title: '로그인 | MyChatApp',
  description: 'MyChatApp에 로그인하세요',
};

export default function LoginPage(): React.ReactElement {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">로그인</h1>
        <LoginForm />
      </div>
    </div>
  );
}