import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const linkClass = ({ isActive }) =>
  isActive ? `${css.link} ${css.active}` : css.link;

export default function AuthNav() {
  return (
    <div className={css.wrap}>
      <NavLink to="/register" className={linkClass}>Реєстрація</NavLink>
      <NavLink to="/login" className={linkClass}>Вхід</NavLink>
    </div>
  );
}
