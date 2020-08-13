import React from 'react';
import styles from './FilmsSort.module.css';

const FilmsSort: React.FC = () => {
    const sortOptions: string[] = ['realise date', 'title', 'budget'];
    return (
        <form className={styles.sortForm}>
            <div className={styles.selectWrapper}>
                <label>sort by
                    <select className={styles.sortSelect}>
                        {sortOptions.map((option) => {
                            return <option className={styles.sortOption} key={option}>{option}</option>;
                        })}
                    </select>
                </label>
            </div>
        </form>
    );
};

export default FilmsSort;
