import React, {useState} from 'react';
import styles from './ModalEditMovie.module.css';
import ModalOverlay from '../ModalOverlay';
import ModalFormWrapper from '../ModalFormWrapper';
import ModalCloseButton from '../ModalCloseButton';
import PrettyButton from '../PrettyButton';
import 'react-datepicker/dist/react-datepicker.css';
import CategorySelector from '../CategorySelector';
import DateInput from '../DateInput';
import {useDispatch, useSelector} from 'react-redux'
import {editMovie} from "../../redux/movieActions";
import {HIDE_POPUP} from "../../redux/types";

const ModalEditMovie: React.FC = () => {

    const processingMovie = useSelector(state => state.movies.processingMovie)
    const [movie, setMovie] = useState(processingMovie);
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

    const resetHandler = () => {
        setMovie(processingMovie);
    };

    const saveHandler = () => {
         dispatch(editMovie(movie))
         dispatch({type: HIDE_POPUP, payload: 'Edit'})
    };

    const inputHandler = (key: string, value: any) => {
        setMovie((prevState) => ({...prevState, [key]: value}));
    };

    return (
        <>
            <ModalOverlay />
            <ModalFormWrapper>
                <ModalCloseButton />
                <form>
                    <h3>Edit movie</h3>
                    <label>movie id</label>
                    <div>{movie.id}</div>

                    <label form={'title'}>title</label>
                    <input
                        id={'title'}
                        type={'text'}
                        onChange={(e) => inputHandler('title', e.target.value)}
                        value={movie.title}
                        placeholder={'enter title'}/>

                    <DateInput startDate={movie.release_date} dateHandler={inputHandler}/>

                    <label form={'url'}>movie url</label>
                    <input id={'url'}
                        type={'text'}
                        onChange={(e) => inputHandler('imageUrl', e.target.value)}
                        value={movie.poster_path}
                        placeholder={'movie URL here'}/>

                    <CategorySelector
                        selectedCategories={movie.genres}
                        chooseCategoryHandler={changeCategoryList}/>

                    <label form={'overview'}>overview</label>
                    <input id={'overview'}
                        type={'text'}
                        onChange={(e) => inputHandler('overview', e.target.value)}
                        value={movie.overview}
                        placeholder={'overview text goes here'}/>

                    <label form={'runtime'}>runtime</label>
                    <input id={'runtime'}
                        type={'number'}
                        onChange={(e) => inputHandler('runtime', +(e.target.value))}
                        value={movie.runtime}
                        placeholder={'runtime text goes here'}/>

                    <div className={styles.buttonsWrapper}>
                        <div className={styles.buttonBalancer}>
                            <PrettyButton clickHandler={resetHandler} text={'reset'}/>
                            <PrettyButton clickHandler={saveHandler} text={'save'}/>
                        </div>
                    </div>
                </form>
            </ModalFormWrapper>
        </>
    );
};

export default ModalEditMovie;
