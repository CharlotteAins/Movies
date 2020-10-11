import React, {useEffect} from "react";
import HeaderLayout from "../HeaderLayout";
import MainLayout from "../MainLayout";
import MoviesPanel from "../MoviesPanel";
import Footer from "../Footer";
import MovieDetailsHeader from "../MovieDetailsHeader";
import MovieDetails from "../MovieDetails";
import {Movie} from "../../services/MovieService";
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom';
import {fetchMovies, getMovieById} from "../../redux/movieActions";

const MovieDetailsPage: React.FC = () => {

    const dispatch = useDispatch();
    const {filterGenre, sortBy, search} = useSelector(state => state.movies);
    const {id} = useParams();

    const currentMovie: Movie = useSelector(state => state.movies.processingMovie);

    useEffect(() => {
        dispatch(getMovieById(id));
        dispatch(fetchMovies(filterGenre, sortBy, search));
    },[id]);

    return (
        <>
            <HeaderLayout darkMode={true}>
                <MovieDetailsHeader/>
                <MovieDetails movie={currentMovie}/>
            </HeaderLayout>
            <MainLayout>
                <MoviesPanel/>
            </MainLayout>
            <Footer/>
        </>
    )
}

export default MovieDetailsPage;
