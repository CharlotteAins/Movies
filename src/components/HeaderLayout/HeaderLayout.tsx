import React from 'react';
import Header from '../Header';
import styles from './HeadLayout.module.css';

interface WrapperProps {
    children: React.ReactNode
}

const HeaderLayout: React.FC<WrapperProps> = ({children}) => {
    return (
        <div className={styles.headerLayout}>
            <Header />
            {children}
        </div>
    );
};

export default HeaderLayout;
