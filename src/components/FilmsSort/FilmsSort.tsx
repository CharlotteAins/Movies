import React, {useState} from 'react';
import styles from './FilmsSort.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovies} from "../../redux/movieActions";

const FilmsSort: React.FC = () => {
    const sortOptions: string[] = ['release date', 'rating'];

    const [optionsVisibility, setOptionsVisibility] = useState(false);
    const [currentOption, setCurrentOption] = useState(sortOptions[0]);

    const dispatch = useDispatch();
    const filterGenre = useSelector(state => state.movies.filterGenre)

    const showAllOptions = () => {
        setOptionsVisibility((prevState) => !prevState);
    };

    const changeCurrentOption = (option: string) => {
        setCurrentOption(option);
        option = option === 'release date' ? 'release_date' : 'vote_average'
        dispatch(fetchMovies(filterGenre, option));
    };

    return (
        <div onClick={() => showAllOptions()} className={styles.sortForm}>
            <span className={styles.sortLabel}>sort by</span>
            <ul className={styles.sortList}>
                {sortOptions.map((option) => {
                    return (
                        <li hidden={!optionsVisibility && option !== currentOption}
                            onClick={() => changeCurrentOption(option)}
                            className={styles.sortItem}
                            key={option}>
                            {option}
                        </li>
                    );
                })}
            </ul>

        </div>
    );
};

export default FilmsSort;
