import React from 'react';
import styles from './MainLayout.module.css';
import FilterWrapper from '../../FilmsFilter/FilterWrapper/FilterWrapper';

interface MainProps {
    children: React.ReactNode
}

const MainLayout: React.FC<MainProps> = ({children}) => {
    return (
        <main className={styles.main}>
            <FilterWrapper/>
            {children}
        </main>
    );
};

export default MainLayout;
