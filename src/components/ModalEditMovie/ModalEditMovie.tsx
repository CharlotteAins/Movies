import React, { useCallback } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { editMovie } from '../../redux/movieActions';
import { HIDE_POPUP } from '../../redux/types';
import { Movie } from '../../services/MovieService';
import ModalCloseButton from '../ModalCloseButton';
import ModalFormWrapper from '../ModalFormWrapper';
import ModalOverlay from '../ModalOverlay';
import MovieForm from '../MovieForm/MovieForm';


const ModalEditMovie: React.FC = () => {
  const processingMovie = useSelector( ( state ) => state.movies.processingMovie );
  const dispatch = useDispatch();

  const saveHandler = useCallback(
    ( movie: Movie ) => {
      dispatch( editMovie( movie ) );
      dispatch( { type: HIDE_POPUP, payload: 'Edit' } );
    }, [ editMovie ] );

  return (
    <>
      <ModalOverlay />
      <ModalFormWrapper>
        <ModalCloseButton />
        <MovieForm
          formType='edit'
          initialMovie={processingMovie}
          submitHandler={saveHandler} />
      </ModalFormWrapper>
    </>
  );
};

export default ModalEditMovie;
