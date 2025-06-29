'use client';

import { useSession } from 'next-auth/react';

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'unauthenticated') return <p>You are not logged in.</p>;

  return <p>Welcome, {session?.user?.name}!</p>;
}
