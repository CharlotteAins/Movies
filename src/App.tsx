import React, {useState} from 'react';
import HeaderLayout from './components/Layouts/HeaderLayout/HeaderLayout';
import Search from './components/Search/Search';
import FooterLayout from './components/Layouts/FooterLayuot/FooterLayout';
import Logo from './components/Logo/Logo';
import MainLayout from './components/Layouts/MainLayout/MainLayuot';
import MovieList from './components/HomePage/MovieList/MovieList';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import {Movie, MovieService} from './services/MovieService';

const App: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>(MovieService.getAllMovies());

    return (
        <>
            <HeaderLayout>
                <Search/>
            </HeaderLayout>
            <MainLayout>
                <ErrorBoundary>
                    <MovieList movies={movies}/>
                </ErrorBoundary>
            </MainLayout>
            <FooterLayout>
                <Logo/>
            </FooterLayout>
        </>
    );
};

export default App;
