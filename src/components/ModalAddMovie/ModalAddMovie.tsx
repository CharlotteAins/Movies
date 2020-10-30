import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { closeAllPopups } from '../../redux/appActions';
import { addMovie } from '../../redux/movieActions';
import { Movie } from '../../services/MovieService';
import ModalCloseButton from '../ModalCloseButton';
import ModalFormWrapper from '../ModalFormWrapper';
import ModalOverlay from '../ModalOverlay';
import MovieForm from '../MovieForm/MovieForm';



const ModalAddMovie: React.FC = () => {

    const newMovie: Movie = {release_date: null, poster_path: '', title: '', overview: '', runtime: 0, genres: []};

    const dispatch = useDispatch();

    const submitHandler = (movie: Movie) => {
            dispatch(addMovie(movie));
            dispatch(closeAllPopups());
    };

    return (
        <>
            <ModalOverlay />
            <ModalFormWrapper>
                <ModalCloseButton />
                <MovieForm
                    formType='add'
                initialMovie={newMovie}
                submitHandler={submitHandler}/>
            </ModalFormWrapper>
        </>
    );
};

export default ModalAddMovie;
