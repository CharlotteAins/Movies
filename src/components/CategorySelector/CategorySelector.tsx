import React, {useState} from 'react';
import styles from './CategorySelector.module.css';
import {MovieService} from '../../services/MovieService';

interface CategorySelectorState {
    selectedCategories: string[],
    chooseCategoryHandler: (category: string) => void
}

const CategorySelector: React.FC<CategorySelectorState> = ({selectedCategories, chooseCategoryHandler}) => {
    const categories = MovieService.getAllMovieCategories().filter((category) => category !== 'all').sort();
    const [isVisible, setVisibility] = useState(false);

    const showAllCategories = () => {
        setVisibility((prevState) => !prevState);
    };

    return (
        <>
            <label form={'genre'}>genre</label>
            <div className={styles.inputWrapper} onClick={showAllCategories}>
                <div className={styles.selectorIcon} />
                <input id={'genre'} value={selectedCategories.join(', ')} placeholder={'select genre'} disabled/>
            </div>
            <ul className={styles.categoryList} hidden={!isVisible}>
                {categories.map((category) => {
                    return (
                        <li
                            className={styles.categoryItem}
                            key={category}>
                            <label className={styles.container}>
                                <span>{category}</span>
                                <input
                                    className={styles.checkbox}
                                    type='checkbox'
                                    onClick={() => chooseCategoryHandler(category)}
                                    defaultChecked={!!selectedCategories.includes(category)}/>
                                <span className={styles.checkmark}/>
                            </label>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default CategorySelector;
