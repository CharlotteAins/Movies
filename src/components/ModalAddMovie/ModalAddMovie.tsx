import React from 'react';
import ModalOverlay from '../ModalOverlay';
import ModalFormWrapper from '../ModalFormWrapper';
import ModalCloseButton from '../ModalCloseButton';

import 'react-datepicker/dist/react-datepicker.css';

import {useDispatch} from 'react-redux'
import MovieForm from "../MovieForm/MovieForm";
import {Movie} from "../../services/MovieService";
import {addMovie} from "../../redux/movieActions";
import {closeAllPopups} from "../../redux/appActions";
import {ValidationError} from "../../services/MovieValidator";

const ModalAddMovie: React.FC = () => {

    const newMovie: Movie = {release_date: null, poster_path: '', title: '', overview: '', runtime: 0, genres: []};

    const dispatch = useDispatch();

    const submitHandler = (movie: Movie, error: ValidationError) => {
        const errorNumber = Object.values(error).filter(v => v != '').length;
        if (errorNumber === 0) {
            dispatch(addMovie(movie));
            dispatch(closeAllPopups());
        }
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
