import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import css from './Layout.module.css';

export default function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <main className={css.main}>
        <Suspense fallback={<p>Завантаження…</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
