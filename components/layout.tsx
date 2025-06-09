import { ReactNode } from 'react';
import Link from 'next/link';

export default function Layout({ children }: { children: ReactNode }): ReactNode {
  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-900 text-white p-4">
        <h2 className="text-xl font-bold mb-4">My Chat App</h2>
        <nav className="space-y-2">
          <Link href="/chat" className="block hover:text-purple-300 transition-colors">Chat</Link>
          <Link href="/profile" className="block hover:text-purple-300 transition-colors">Profile</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white shadow flex items-center justify-between px-6 border-b border-purple-100">
          <h1 className="text-lg font-semibold text-purple-900">Dashboard</h1>
          <button className="text-sm text-purple-600 hover:text-purple-800 transition-colors">Logout</button>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto bg-purple-50 p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
