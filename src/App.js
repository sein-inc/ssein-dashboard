import { lazy, Suspense, useEffect } from 'react';

import Index from "./jsx";
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./css/style.css";
import { checkLogin } from './store/functions/authFuctions';

// const SignUp = lazy(() => import('./jsx/pages/Registration'));

// const ForgotPassword = lazy(() => import('./jsx/pages/ForgotPassword'));

const Login = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./jsx/pages/Login')), 500);
  });
});

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLogin());
  }, []);

  const { isAuthenticated } = useSelector(state => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  }, [isAuthenticated]);

  let routeblog = (

    <Routes>
      <Route path='/' element={<Login />} />
      {/* <Route path='/page-register' element={<SignUp />} />
      <Route path='/page-forgot-password' element={<ForgotPassword />} /> */}
    </Routes>
  );

  if (isAuthenticated) {
    return (
      <>
        <Suspense fallback={
          <div id="preloader">
            <div className="sk-three-bounce">
              <div className="sk-child sk-bounce1"></div>
              <div className="sk-child sk-bounce2"></div>
              <div className="sk-child sk-bounce3"></div>
            </div>
          </div>
        }
        >
          <Index />
        </Suspense>
      </>
    );
  } else {
    return (
      <div className="vh-100">
        <Suspense fallback={
          <div id="preloader">
            <div className="sk-three-bounce">
              <div className="sk-child sk-bounce1"></div>
              <div className="sk-child sk-bounce2"></div>
              <div className="sk-child sk-bounce3"></div>
            </div>
          </div>
        }
        >
          {routeblog}
        </Suspense>
      </div>
    );
  }
};

export default App;

