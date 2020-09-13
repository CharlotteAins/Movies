import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import Loader from "../Loader";
import FilterPanel from "../FilterPanel";
import ErrorBoundary from "../ErrorBoundary";
import MovieList from "../MovieList";
import {fetchMovies} from "../../redux/movieActions";
import {Movie} from "../../services/MovieService";

const MoviesPanel: React.FC = () => {

    const movies: Movie[] = useSelector(state => state.movies.movies)
    const loading: boolean = useSelector(state => state.app.loader)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

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
