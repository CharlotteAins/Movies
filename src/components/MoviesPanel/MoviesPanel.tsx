import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../redux/movieActions';
import { Movie } from '../../services/MovieService';
import ErrorBoundary from '../ErrorBoundary';
import FilterPanel from '../FilterPanel';
import Loader from '../Loader';
import MovieList from '../MovieList';

const MoviesPanel: React.FC = () => {
    const movies: Movie[] = useSelector( ( state ) => state.movies.movies );
    const loading: boolean = useSelector( ( state ) => state.app.loader );
    const dispatch = useDispatch();
    const { category, sortBy, search } = useRouter().query;

    useEffect( () => {
        if ( !category && !sortBy && !search ) {
            dispatch( fetchMovies() );
        } else {
            dispatch( fetchMovies( category, sortBy, search ) );
        }
    }, [ category, sortBy, search ] );

    return (
        <>
            <FilterPanel />
            <ErrorBoundary>
                {loading ? ( <Loader /> ) : ( <MovieList movies={movies} /> )}
            </ErrorBoundary>
        </>
    );
};

export default MoviesPanel;
