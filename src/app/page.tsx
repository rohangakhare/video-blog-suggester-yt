'use client';

import Image from 'next/image';
import { useSession, signIn, signOut } from '@/lib/auth/client';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <main className="p-8 bg-white rounded shadow text-center">
        {!session ? (
          <>
            <h1 className="text-2xl font-semibold mb-4">Welcome</h1>
            <button
              onClick={() => signIn.social({ provider: 'github' })}
              className="px-4 py-2 bg-black text-white rounded"
            >
              Sign in with GitHub
            </button>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center gap-4">
              {session.user?.image && (
                <Image
                  src={session.user.image}
                  alt={session.user.name ?? 'User avatar'}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              )}
              <h2 className="text-xl font-medium">{session.user?.name}</h2>
              <button
                onClick={() => signOut()}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Sign out
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
