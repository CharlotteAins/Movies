import React from 'react';
import ModalOverlay from '../ModalOverlay';
import ModalFormWrapper from '../ModalFormWrapper';
import ModalCloseButton from '../ModalCloseButton';
import {useDispatch, useSelector} from 'react-redux'

import 'react-datepicker/dist/react-datepicker.css';
import MovieForm from "../MovieForm/MovieForm";
import {ValidationError} from "../../services/MovieValidator";
import {editMovie} from "../../redux/movieActions";
import {HIDE_POPUP} from "../../redux/types";
import {Movie} from "../../services/MovieService";

const ModalEditMovie: React.FC = () => {

    const processingMovie = useSelector(state => state.movies.processingMovie)
    const dispatch = useDispatch();

    const saveHandler = (movie: Movie, error: ValidationError) => {
        const errorNumber = Object.values(error).filter(v => v != '').length;
        if (errorNumber === 0) {
            dispatch(editMovie(movie))
            dispatch({type: HIDE_POPUP, payload: 'Edit'})
        }
    };

    return (
        <>
            <ModalOverlay/>
            <ModalFormWrapper>
                <ModalCloseButton/>
                <MovieForm
                    formType='edit'
                    initialMovie={processingMovie}
                    submitHandler={saveHandler}/>
            </ModalFormWrapper>
        </>
    );
};

export default ModalEditMovie;
