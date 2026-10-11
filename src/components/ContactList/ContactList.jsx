import { useSelector } from 'react-redux';
import { selectContacts, selectVisibleContacts } from '../../redux/contacts/selectors';
import ContactListItem from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const visible = useSelector(selectVisibleContacts);

  if (visible.length === 0) {
    return <p>{contacts.length ? 'Нічого не знайдено.' : 'Контактів поки немає.'}</p>;
  }
  return (
    <ul className={css.list}>
      {visible.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
