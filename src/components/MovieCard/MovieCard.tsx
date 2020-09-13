import React, {useContext, useState} from 'react';
import styles from './MovieCard.module.css';
import {Movie} from '../../services/MovieService';
import CardActionsMenu from '../CardActionsMenu';
import Context from '../../services/Context';

interface MovieCardProps {
    movie: Movie
}

const MovieCard: React.FC<MovieCardProps> = ({movie}) => {
    const [showActionMenu, toggleActionMenu] = useState(false);

    const {setMovieId} = useContext(Context);

    const menuButtonHandler = () => {
        setMovieId(movie.id);
        toggleActionMenu(true);
    };

    const cardClickHandler = () => {
        setMovieId(movie.id);
    }

    return (
        <li className={styles.movieCard}>
            <img onClick={cardClickHandler} src={movie.imageUrl} width='350' height='450'/>
            <div className={styles.filmInfo}>
                <p className={styles.filmTitle}>{movie.title}</p>
                <p className={styles.filmYear}>{movie.releaseDate.getFullYear()}</p>
            </div>
            <p className={styles.filmTagline}>{movie.tagline}</p>
            <button onClick={menuButtonHandler} type={'button'} className={styles.cardMenuButton}>...</button>
            {showActionMenu && <CardActionsMenu closePopup={() => toggleActionMenu(false)} />}
        </li>
    );
};

export default MovieCard;
