import React, {useCallback, useContext, useState} from 'react';
import styles from './ModalAddMovie.module.css';
import ModalOverlay from '../ModalOverlay';
import ModalFormWrapper from '../ModalFormWrapper';
import ModalCloseButton from '../ModalCloseButton';
import PrettyButton from '../PrettyButton';
import 'react-datepicker/dist/react-datepicker.css';
import CategorySelector from '../CategorySelector';
import DateInput from '../DateInput';
import Context from '../../services/Context';
import {Movie, MovieService} from '../../services/MovieService';

const ModalAddMovie: React.FC = () => {
    const {handleAddPopup} = useContext(Context);

    const newMovie: Movie = {id: 0, releaseDate: null, imageUrl: '', title: '', genres: []};
    const [movie, setMovie] = useState(newMovie);

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

    const submitHandler = useCallback(() => {
         MovieService.addMovie(movie);
         handleAddPopup();
    }, [movie]);

    return (
        <>
            <ModalOverlay closePopupHandler={handleAddPopup}/>
            <ModalFormWrapper>
                <ModalCloseButton closeModal={handleAddPopup}/>
                <form>
                    <h3>Add movie</h3>

                    <label form={'title'}>title</label>
                    <input
                        id={'title'}
                        type={'text'}
                        onChange={(e) => inputHandler('title', e.target.value)}
                        value={movie.title}
                        placeholder={'enter title'}/>

                    <DateInput startDate={movie.releaseDate} dateHandler={inputHandler}/>

                    <label form={'url'}>movie url</label>
                    <input id={'url'}
                           type={'text'}
                           onChange={(e) => inputHandler('imageUrl', e.target.value)}
                           value={movie.imageUrl}
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
