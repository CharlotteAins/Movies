import React from 'react';
import styles from './Footer.module.css';
import Logo from '../Logo';


const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Logo />
        </footer>
    );
};

export default Footer;
