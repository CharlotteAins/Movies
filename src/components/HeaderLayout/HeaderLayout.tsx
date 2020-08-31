import React from 'react';
import styles from './HeadLayout.module.css';

interface WrapperProps {
    children: React.ReactNode
    darkMode?: boolean
}

const HeaderLayout: React.FC<WrapperProps> = ({darkMode, children}) => {

    return (
        <div className={`${styles.headerLayout} ${darkMode ? styles.darkOverlay : ''}`}>
            {children}
        </div>
    );

};

export default HeaderLayout;
