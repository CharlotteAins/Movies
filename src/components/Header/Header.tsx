import React from 'react';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Logo/>
            <button className={styles.btnAdd}>+ add movie</button>
        </header>
    );
};

export default Header;
