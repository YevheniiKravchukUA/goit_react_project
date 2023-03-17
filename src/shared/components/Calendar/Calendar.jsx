import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from './Calendar.module.scss';

export const Calendar = ({ date, onSubmit }) => {
  const currentDate = new Date();
  return (
    <div className={style.wrapper}>
      <ReactDatePicker
        className={style.calendar}
        selected={date}
        dateFormat="dd/MM/yyyy"
        maxDate={currentDate}
        onChange={chosenDate => {
          onSubmit(chosenDate);
        }}
      />
    </div>
  );
};