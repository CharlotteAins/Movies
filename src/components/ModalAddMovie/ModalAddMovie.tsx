import React, {useState} from 'react';
import styles from './ModalAddMovie.module.css';
import ModalOverlay from '../ModalOverlay';
import ModalFormWrapper from '../ModalFormWrapper';
import ModalCloseButton from '../ModalCloseButton';
import PrettyButton from '../PrettyButton';
import 'react-datepicker/dist/react-datepicker.css';
import CategorySelector from '../CategorySelector';
import DateInput from '../DateInput';
import {Movie} from '../../services/MovieService';
import {useDispatch} from 'react-redux'
import {addMovie} from "../../redux/movieActions";
import {closeAllPopups} from "../../redux/appActions";

const ModalAddMovie: React.FC = () => {

    const newMovie: Movie = {release_date: null, poster_path: '', title: '', overview: '', runtime: 0, genres: []};
    const [movie, setMovie] = useState(newMovie);

    const dispatch = useDispatch();

    const changeCategoryList = (category: string): void => {
        if (movie.genres.includes(category)) {
            setMovie((prevState) => {
                prevState.genres = prevState.genres.filter((genre) => genre !== category);
                return prevState;
            });
        } else {
            setMovie((prevState) => {
                prevState.genres.push(category);
                return prevState;
            });
        }
    };

    const inputHandler = (key: string, value: any) => {
        setMovie((prevState) => ({...prevState, [key]: value}));
    };

    const resetHandler = () => {
        setMovie(newMovie);
    };

    const submitHandler = () => {
        dispatch(addMovie(movie));
        dispatch(closeAllPopups());
    };

    return (
        <>
            <ModalOverlay />
            <ModalFormWrapper>
                <ModalCloseButton />
                <form>
                    <h3>Add movie</h3>

                    <label form={'title'}>title</label>
                    <input
                        id={'title'}
                        type={'text'}
                        onChange={(e) => inputHandler('title', e.target.value)}
                        value={movie.title}
                        placeholder={'enter title'}/>

                    <label form={'overview'}>overview</label>
                    <input
                        id={'overview'}
                        type={'text'}
                        onChange={(e) => inputHandler('overview', e.target.value)}
                        value={movie.overview}
                        placeholder={'enter overview'}/>

                    <label form={'runtime'}>runtime</label>
                    <input id={'runtime'}
                           type={'number'}
                           onChange={(e) => inputHandler('runtime', +(e.target.value))}
                           value={movie.runtime}
                           placeholder={'runtime text goes here'}/>

                    <DateInput startDate={movie.release_date} dateHandler={inputHandler}/>

                    <label form={'url'}>movie url</label>
                    <input id={'url'}
                           type={'text'}
                           onChange={(e) => inputHandler('poster_path', e.target.value)}
                           value={movie.poster_path}
                           placeholder={'movie URL here'}/>

                    <CategorySelector
                        selectedCategories={movie.genres}
                        chooseCategoryHandler={changeCategoryList}/>

                    <div className={styles.buttonsWrapper}>
                        <div className={styles.buttonBalancer}>
                            <PrettyButton clickHandler={resetHandler} text={'reset'}/>
                            <PrettyButton clickHandler={submitHandler} text={'submit'}/>
                        </div>
                    </div>
                </form>
            </ModalFormWrapper>
        </>
    );
};

export default ModalAddMovie;
