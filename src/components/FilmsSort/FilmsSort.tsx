import React, {useState} from 'react';
import styles from './FilmsSort.module.css';

const FilmsSort: React.FC = () => {
    const sortOptions: string[] = ['realise date', 'title', 'budget'];

    const [optionsVisibility, setOptionsVisibility] = useState(false);
    const [currentOption, setCurrentOption] = useState(sortOptions[0]);

    const showAllOptions = () => {
        setOptionsVisibility((prevState) => !prevState);
    };

    const changeCurrentOption = (option: string) => {
        setCurrentOption(option);
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
