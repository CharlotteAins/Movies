import React, {useEffect, useState} from "react";
import styles from './MoviesPanel.module.css'
import Loader from "../Loader";
import FilterPanel from "../FilterPanel";
import ErrorBoundary from "../ErrorBoundary";
import MovieList from "../MovieList";
import {Movie, MovieService} from "../../services/MovieService";

const MoviesPanel: React.FC = () => {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        MovieService.getAllMovies().then((movies) => {
            setMovies(movies);
            setLoading(false);
        });
    })

    return (
        <>
            <FilterPanel/>
            <ErrorBoundary>
                {loading ? (<Loader/>) : (<MovieList movies={movies}/>)}
            </ErrorBoundary>
        </>
    )
}

export default MoviesPanel;
