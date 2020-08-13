import React from 'react';
import styles from './MovieCard.module.css';
import {Movie} from '../../../services/MovieService';

interface MovieCardProps {
    movie: Movie
}

const MovieCard: React.FC<MovieCardProps> = ({movie}) => {
    return (
        <li className={styles.movieCard}>
            <img src={movie.imageUrl} width='350' height='450'/>
            <div className={styles.filmInfo}>
                <p className={styles.filmTitle}>{movie.title}</p>
                <p className={styles.filmYear}>{movie.releaseDate.getFullYear()}</p>
            </div>
            <p className={styles.filmTagline}>{movie.tagline}</p>
            <button type={'button'} className={styles.cardMenuButton}>...</button>
        </li>
    );
};

export default MovieCard;
