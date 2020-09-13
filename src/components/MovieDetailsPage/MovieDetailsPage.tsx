import React from "react";
import styles from './MovieDetailsPage.module.css'
import HeaderLayout from "../HeaderLayout";
import MainLayout from "../MainLayout";
import MoviesPanel from "../MoviesPanel";
import Footer from "../Footer";
import MovieDetailsHeader from "../MovieDetailsHeader";
import MovieDetails from "../MovieDetails";
import {Movie, MovieService} from "../../services/MovieService";

interface MovieDetailsPageProps {
    movieId: number
}

const MovieDetailsPage: React.FC<MovieDetailsPageProps> = ({movieId}) => {

    const currentMovie:Movie = MovieService.getMovieById(movieId);

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
