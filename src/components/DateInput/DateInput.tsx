import React from 'react';
import styles from './DateInput.module.css';
import DatePicker from 'react-datepicker';

interface DateInputState {
    startDate: Date,
    dateHandler: (field: string, value: any) => void
}

const DateInput: React.FC<DateInputState> = ({startDate, dateHandler}) => {
    return (
        <>
            <label form={'release_date'}>realize date</label>
            <div className={styles.calendarIcon}/>
            <DatePicker id={'release_date'}
                        name={'release_date'}
                        selected={(startDate && new Date(startDate)) || null}
                        onChange={val => dateHandler('release_date', val)}
                        placeholderText={'Select Date'}/>
        </>
    );
};

export default DateInput;
