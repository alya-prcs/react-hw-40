import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { selectAuthError } from '../../redux/auth/selectors';
import css from './RegisterForm.module.css';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = e.currentTarget.elements;
    dispatch(
      register({ name: name.value, email: email.value, password: password.value }),
    );
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <h1>Реєстрація</h1>
      <label className={css.label}>
        Ім’я
        <input type="text" name="name" required />
      </label>
      <label className={css.label}>
        Пошта
        <input type="email" name="email" required />
      </label>
      <label className={css.label}>
        Пароль
        <input type="password" name="password" minLength={7} required />
      </label>
      {error && <p className={css.error}>Помилка: {error}</p>}
      <button type="submit">Зареєструватися</button>
    </form>
  );
}
