import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/contacts/selectors';
import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const id = useId();
  return (
    <div className={css.wrap}>
      <label htmlFor={id}>Пошук за іменем</label>
      <input id={id} type="text" value={filter} onChange={(e) => dispatch(setFilter(e.target.value))} />
    </div>
  );
}
