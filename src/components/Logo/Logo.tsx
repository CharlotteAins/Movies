import React from 'react';
import styles from './Logo.module.css';

//PATTERN: Statless Component
const Logo: React.FC = () => {
  return <p className={styles.logo}><b>netflix</b>roulette</p>;
};

export default Logo;
