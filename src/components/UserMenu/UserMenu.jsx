import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { email } = useSelector(selectUser);
  return (
    <div className={css.wrap}>
      <p className={css.email}>{email}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Вийти
      </button>
    </div>
  );
}
