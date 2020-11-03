import Router from 'next/router';
import React from 'react';
import Logo from '../Logo';
import styles from './MovieDetailsHeader.module.css';

const MovieDetailsHeader: React.FC = () => {
  const backHome = () => Router.push( '/' );

  return (
    <div className={styles.headerWrapper}>
      <Logo />
      <button onClick={backHome} className={styles.searchButton} type={'button'}>&#9906;</button>
    </div>
  );
};

export default MovieDetailsHeader;
