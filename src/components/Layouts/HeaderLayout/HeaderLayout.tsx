import React from 'react';
import Header from '../../Header/Header';
import styles from './HeadWrapper.module.css';

interface WrapperProps {
    children: React.ReactNode
}

const HeaderLayout: React.FC<WrapperProps> = ({children}) => {
    return (
        <div className={styles.headerWrapper}>
            <Header />
            {children}
        </div>
    );
};

export default HeaderLayout;
