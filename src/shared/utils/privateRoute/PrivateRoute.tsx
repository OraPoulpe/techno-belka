'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useAuthenticated } from '../hooks/useAuthenticated';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const isAuth = useAuthenticated();

  useEffect(() => {
    if (!isAuth) {
      router.push('/login');
    }
  }, [isAuth, router]);

  return <>{children}</>;
};

export default PrivateRoute;
