import React from 'react';
import styles from './DateInput.module.css';
import DatePicker from 'react-datepicker';

interface DateInputState {
    startDate: Date,
    dateHandler: (key: string, value: any) => void
}

const DateInput: React.FC<DateInputState> = ({startDate, dateHandler}) => {
    return (
        <>
            <label form={'date'}>realize date</label>
            <div className={styles.calendarIcon}/>
            <DatePicker id={'date'} selected={startDate} onChange={(date) => dateHandler('releaseDate', date)} placeholderText={'Select Date'}/>
        </>
    );
};

export default DateInput;
