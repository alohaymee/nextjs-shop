'use client';
import {forwardRef, useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DateRangePicker.module.scss';

const DateRangePicker = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const CustomInput = forwardRef(({value, onClick}, ref) => (
    <button className={styles.btn} onClick={onClick} ref={ref}>
      {`${startDate} > ${endDate}`}
    </button>
  ));
  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={update => {
        setDateRange(update);
      }}
      isClearable={true}
      customInput={<CustomInput />}
    />
  );
};

export default DateRangePicker;
