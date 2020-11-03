import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getMovieById } from '../../redux/movieActions';
import { Movie } from '../../services/MovieService';
import Footer from '../Footer';
import HeaderLayout from '../HeaderLayout';
import MainLayout from '../MainLayout';
import MovieDetails from '../MovieDetails';
import MovieDetailsHeader from '../MovieDetailsHeader';
import MoviesPanel from '../MoviesPanel';

const MovieDetailsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { filterGenre, sortBy, search } = useSelector( ( state ) => state.movies );
  const { id } = useRouter().query;

  const currentMovie: Movie = useSelector( ( state ) => state.movies.processingMovie );

  useEffect( () => {
    dispatch( getMovieById( +id ) );
    dispatch( fetchMovies( filterGenre, sortBy, search ) );
  }, [ id, filterGenre, sortBy, search ] );

  return (
    <>
      <HeaderLayout darkMode={true}>
        <MovieDetailsHeader />
        <MovieDetails movie={currentMovie} />
      </HeaderLayout>
      <MainLayout>
        <MoviesPanel />
      </MainLayout>
      <Footer />
    </>
  );
};

export default MovieDetailsPage;
