import React from 'react';
import DatePicker from 'react-datepicker';
import styles from './DateInput.module.css';

export interface DateInputState {
  startDate: Date,
  dateHandler: ( field: string, value: any ) => void;
}

const DateInput: React.FC<DateInputState> = ( { startDate, dateHandler } ) => {
  return (
    <>
      <label form={'release_date'}>realize date</label>
      <div className={styles.calendarIcon} />
      <DatePicker id={'release_date'}
        name={'release_date'}
        selected={( startDate && new Date( startDate ) ) || null}
        onChange={val => dateHandler( 'release_date', val )}
        placeholderText={'Select Date'} />
    </>
  );
};

export default DateInput;
