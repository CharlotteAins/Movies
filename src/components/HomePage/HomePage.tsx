import React from 'react';
import styles from './HomePage.module.css';
import HeaderLayout from '../HeaderLayout';
import Header from '../Header';
import Search from '../Search';
import MainLayout from '../MainLayout';
import Footer from '../Footer';
import MoviesPanel from "../MoviesPanel";

const HomePage: React.FC = () => {

    return (
        <>
            <HeaderLayout>
                <Header />
                <Search/>
            </HeaderLayout>
            <MainLayout>
               <MoviesPanel />
            </MainLayout>
            <Footer/>
        </>
    );
};

export default HomePage;
