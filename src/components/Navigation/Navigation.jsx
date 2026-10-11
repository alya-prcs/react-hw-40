import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

const linkClass = ({ isActive }) =>
  isActive ? `${css.link} ${css.active}` : css.link;

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={linkClass}>Головна</NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={linkClass}>Контакти</NavLink>
      )}
    </nav>
  );
}
