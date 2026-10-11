import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import Layout from '../Layout/Layout';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';

const Home = lazy(() => import('../../pages/Home/Home'));
const Register = lazy(() => import('../../pages/Register/Register'));
const Login = lazy(() => import('../../pages/Login/Login'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <p style={{ padding: 24 }}>Завантаження…</p>;

  return (
    <Suspense fallback={<p style={{ padding: 24 }}>Завантаження…</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={<RestrictedRoute redirectTo="/contacts" component={<Register />} />}
          />
          <Route
            path="login"
            element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />}
          />
          <Route
            path="contacts"
            element={<PrivateRoute redirectTo="/login" component={<Contacts />} />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}
