import { LoginForm } from '@/features/auth/loginForm';
import React from 'react';
import styles from './LoginScreen.module.scss'

const LoginScreen = () => {
  return (
    <main className={styles.main__wrap}>
      <LoginForm/>
    </main>
  );
};

export default LoginScreen  