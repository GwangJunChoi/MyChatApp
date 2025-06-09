'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/contexts/AuthContext';
import { signOut } from '@/lib/firebase';
import { goToLogin } from '@/utils/navigation';

export default function Layout({ children }: { children: ReactNode }): ReactNode {
  const { user, isAuthenticated } = useAuthContext();
  const router = useRouter();

  const handleLogout = async (): Promise<void> => {
    try {
      await signOut();
      goToLogin(router);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-purple-50">
        {children}
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-900 text-white p-4">
        <div className="flex items-center space-x-2 mb-6">
          <Image
            src="/logo.svg"
            alt="MyChatApp Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <h2 className="text-xl font-bold">MyChatApp</h2>
        </div>
        <nav className="space-y-2">
          <Link href="/chat" className="block hover:text-purple-300 transition-colors">Chat</Link>
          <Link href="/profile" className="block hover:text-purple-300 transition-colors">Profile</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white shadow flex items-center justify-between px-6 border-b border-purple-100">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="MyChatApp Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <h1 className="text-lg font-semibold text-purple-900">MyChatApp</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-purple-600">{user?.email}</span>
            <button
              onClick={handleLogout}
              className="text-sm text-purple-600 hover:text-purple-800 transition-colors"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto bg-purple-50 p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
