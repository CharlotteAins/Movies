import React, {useState} from 'react';
import styles from './FilmsSort.module.css';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

const FilmsSort: React.FC = () => {
    const sortOptions: string[] = ['release date', 'rating'];

    const [optionsVisibility, setOptionsVisibility] = useState(false);
    const [currentOption, setCurrentOption] = useState(sortOptions[0]);

    const history = useHistory();
    const {filterGenre, search} = useSelector(state => state.movies);

    const showAllOptions = () => {
        setOptionsVisibility((prevState) => !prevState);
    };

    const changeCurrentOption = (option: string) => {
        setCurrentOption(option);
        option = option === 'release date' ? 'release_date' : 'vote_average'
        history.push(`/search/${filterGenre ? filterGenre : 'all'}/${option ? option : ' '}/${search ? search : ' /'}`)
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
