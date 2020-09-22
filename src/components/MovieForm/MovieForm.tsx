import React, {useState} from 'react';
import {Movie} from "../../services/MovieService";
import Field from "../Field";
import styles from './MovieForm.module.css';
import DateInput from "../DateInput";
import PrettyButton from "../PrettyButton";
import CategorySelector from "../CategorySelector";
import {MovieValidator, ValidationError} from "../../services/MovieValidator";

interface MovieFormProps {
    formType: string,
    initialMovie: Movie,
    submitHandler: (movie: Movie, error: ValidationError) => void
}

const MovieForm: React.FC<MovieFormProps> = ({formType, initialMovie, submitHandler}) => {

    const newError: ValidationError = {};
    const [movie, setMovie] = useState(initialMovie);
    const [error, setError] = useState(newError);

    const changeCategoryList = (category: string): void => {
        setMovie(prevState => {
            let newGenres;
            if (prevState.genres.includes(category)) {
                newGenres = prevState.genres.filter((genre) => genre !== category);
            } else {
                newGenres = [...prevState.genres, category];
            }
            validateInput('genres', newGenres);
            return {...prevState, genres: newGenres};
        })
    };

    const inputHandler = (key: string, value: any) => {
        validateInput(key, value);
        setMovie((prevState) => ({...prevState, [key]: value}));
    };

    const validateInput = (key: string, value: any) => {
        const validationError = MovieValidator.validate(key, value);
        setError(prevState => ({...prevState, ...validationError}))
    }

    const resetHandler = () => {
        setMovie(initialMovie);
    };

    return (
        <form>
            <h3>{formType} movie</h3>

            {formType === 'edit' &&
            <>
                <label>movie id</label>
                <div>{movie.id}</div>
            </>}

            <Field
                inputKey='title'
                label='title'
                type='text'
                onChangeHandler={inputHandler}
                value={movie.title}
                placeholder='enter title'
                error={error.title}/>

            <Field
                inputKey='overview'
                label='overview'
                type='text'
                onChangeHandler={inputHandler}
                value={movie.overview}
                placeholder='enter overview'
                error={error.overview}/>

            <Field
                inputKey='runtime'
                label='runtime'
                type='number'
                onChangeHandler={inputHandler}
                value={movie.runtime}
                placeholder='runtime text goes here'
                error={error.runtime}/>

            <DateInput startDate={movie.release_date} dateHandler={inputHandler}/>

            <Field
                inputKey='poster_path'
                label='movie url'
                type='text'
                onChangeHandler={inputHandler}
                value={movie.poster_path}
                placeholder='movie URL here'
                error={error.poster_path}/>

            <CategorySelector
                selectedCategories={movie.genres}
                chooseCategoryHandler={changeCategoryList}/>
            <span>{error.genres}</span>

            <div className={styles.buttonsWrapper}>
                <div className={styles.buttonBalancer}>
                    <PrettyButton clickHandler={resetHandler} text='reset'/>
                    <PrettyButton clickHandler={() => submitHandler(movie, error)}
                                  text={formType === 'add' ? 'save' : 'submit'}/>
                </div>
            </div>
        </form>
    );

};

export default MovieForm;
