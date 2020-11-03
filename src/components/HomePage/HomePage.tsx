import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import HeaderLayout from '../HeaderLayout';
import MainLayout from '../MainLayout';
import MoviesPanel from '../MoviesPanel';
import Search from '../Search';

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
