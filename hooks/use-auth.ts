'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated, logout } from '@/lib/auth';

export function useAuth(redirectTo = '/login') {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace(redirectTo);
    } else {
      setChecked(true);
    }
  }, [redirectTo, router]);

  return { ready: checked, logout: () => { logout(); router.replace('/login'); } };
}
