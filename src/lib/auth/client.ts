'use client';

import { createAuthClient } from 'better-auth/react';

// Centralized client instance — add client-side plugins or defaults here.
export const authClient = createAuthClient({
  // plugins: [ /* twoFactorClient(), organizationClient(), ... */ ],
});

export const { useSession, signIn, signOut, getSession } = authClient;
