import React from 'react';
import {Movie, MovieService} from '../../../services/MovieService';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MovieList.module.css';

interface MovieListProps {
    movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({movies}) => {
    return (
        <>
            <p className={styles.moviesCount}><b>{movies.length}</b> movies found</p>
            <ul className={styles.movieList}>
                {movies.map((movie) => {
                    return <MovieCard movie={movie} key={movie.id}/>;
                })}
            </ul>
        </>
    );
};

export default MovieList;
