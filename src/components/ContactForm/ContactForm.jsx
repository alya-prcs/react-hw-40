import { useId, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const nameId = useId();
  const numberId = useId();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (contacts.some((c) => c.name.toLowerCase() === trimmed.toLowerCase())) {
      alert(`${trimmed} уже є в контактах.`);
      return;
    }
    dispatch(addContact({ name: trimmed, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor={nameId}>Ім’я</label>
      <input id={nameId} type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <label htmlFor={numberId}>Номер телефону</label>
      <input id={numberId} type="tel" value={number} onChange={(e) => setNumber(e.target.value)} required />
      <button type="submit">Додати контакт</button>
    </form>
  );
}
