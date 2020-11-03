import React from 'react';
import styles from './MainLayout.module.css';

interface MainProps {
  children: React.ReactNode;
}

//PATTERN: Layout Component
const MainLayout: React.FC<MainProps> = ( { children } ) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
};

export default MainLayout;
