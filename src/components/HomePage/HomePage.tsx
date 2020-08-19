import React, {useState} from 'react';
import styles from './HomePage.module.css';
import HeaderLayout from '../HeaderLayout';
import Search from '../Search/Search';
import MainLayout from '../MainLayout';
import FilterPanel from '../FilterPanel';
import ErrorBoundary from '../ErrorBoundary';
import MovieList from '../MovieList';
import Footer from '../Footer';
import {Movie, MovieService} from '../../services/MovieService';
import Loader from '../Loader/Loader';

const HomePage: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    MovieService.getAllMovies().then((movies) => {
        setMovies(movies);
        setLoading(false);
    });

    return (
        <>
            <HeaderLayout>
                <Search/>
            </HeaderLayout>
            <MainLayout>
                <FilterPanel/>
                <ErrorBoundary>
                    {loading ? (<Loader/>) : (<MovieList movies={movies}/>)}
                </ErrorBoundary>
            </MainLayout>
            <Footer/>
        </>
    );
};

export default HomePage;
