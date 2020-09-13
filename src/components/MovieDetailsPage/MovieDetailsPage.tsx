import React from "react";
import HeaderLayout from "../HeaderLayout";
import MainLayout from "../MainLayout";
import MoviesPanel from "../MoviesPanel";
import Footer from "../Footer";
import MovieDetailsHeader from "../MovieDetailsHeader";
import MovieDetails from "../MovieDetails";
import {Movie} from "../../services/MovieService";
import {useSelector} from 'react-redux'

const MovieDetailsPage: React.FC = () => {

    const currentMovie: Movie = useSelector(state => state.movies.processingMovie)

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
