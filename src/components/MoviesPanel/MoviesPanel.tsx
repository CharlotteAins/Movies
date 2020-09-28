import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import Loader from "../Loader";
import FilterPanel from "../FilterPanel";
import ErrorBoundary from "../ErrorBoundary";
import MovieList from "../MovieList";
import {fetchMovies} from "../../redux/movieActions";
import {Movie} from "../../services/MovieService";
import {useParams} from 'react-router-dom';

const MoviesPanel: React.FC = () => {

    const movies: Movie[] = useSelector(state => state.movies.movies)
    const loading: boolean = useSelector(state => state.app.loader)
    const dispatch = useDispatch();
    const {category, sortBy, search} = useParams();

    useEffect(() => {
        if (!category && !sortBy && !search) {
            dispatch(fetchMovies())
        } else {
            dispatch(fetchMovies(category, sortBy, search))
        }
    }, [category, sortBy, search])

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
