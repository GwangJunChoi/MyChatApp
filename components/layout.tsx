import { ReactNode } from 'react';
import Link from 'next/link';

export default function Layout({ children }: { children: ReactNode }): ReactNode {
  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-4">My Chat App</h2>
        <nav className="space-y-2">
          <Link href="/chat" className="block hover:text-blue-400">Chat</Link>
          <Link href="/profile" className="block hover:text-blue-400">Profile</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white shadow flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <button className="text-sm text-gray-600 hover:underline">Logout</button>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
