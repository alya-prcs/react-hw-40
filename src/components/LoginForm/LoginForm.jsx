import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { selectAuthError } from '../../redux/auth/selectors';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;
    dispatch(logIn({ email: email.value, password: password.value }));
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <h1>Вхід</h1>
      <label className={css.label}>
        Пошта
        <input type="email" name="email" required />
      </label>
      <label className={css.label}>
        Пароль
        <input type="password" name="password" required />
      </label>
      {error && <p className={css.error}>Помилка: {error}</p>}
      <button type="submit">Увійти</button>
    </form>
  );
}
