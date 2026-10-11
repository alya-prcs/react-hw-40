import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from './ContactListItem.module.css';

export default function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <li className={css.item}>
      <span>{name}: {number}</span>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>Видалити</button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
