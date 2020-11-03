import React from 'react';
import Logo from '../Logo';
import styles from './Footer.module.css';


const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
    </footer>
  );
};

export default Footer;
