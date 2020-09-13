import React from "react";
import styles from './MovieDetails.module.css'
import {Movie} from "../../services/MovieService";

interface MovieDetailsProps {
    movie: Movie
}

const MovieDetails: React.FC<MovieDetailsProps> = ({movie}) => {
    if (movie == null) {
        return <div className={styles.withoutMovie}>Movie wasn't found, choose another</div>
    } else {
        return (
            <div className={styles.detailsWrapper}>
                <img src={movie.imageUrl} width='350' height='450'/>
                <div className={styles.description}>
                    <div className={styles.title}>
                        <h3>{movie.title}</h3>
                        <p className={styles.voteAverage}>{movie.vote_average}</p>
                    </div>
                    <p>{movie.tagline}</p>
                    <div className={styles.timeInformation}>
                        <span>{movie.releaseDate.getFullYear()}</span>
                        <span>{movie.runtime} min</span>
                    </div>
                    <p>{movie.overview}</p>
                </div>
            </div>
        )
    }
}

export default MovieDetails;
