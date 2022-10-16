import './App.css';
import {
  Outlet,
  Route,
  Routes,
  useNavigate
} from "react-router-dom";
import 'antd/dist/antd.css';

import React, { Suspense, useEffect } from 'react';
import { RouterItemInterface, routers } from 'router';
import PrivateRoute from 'middleware/PrivateRoute';
import PublicRoute from 'middleware/PublicRoute';
import Login from 'pages/login/Login';
import EmptyLayout from 'component/Layout/EmptyLayout';
import { useDispatch } from 'react-redux';
import { storeSetIsLogin } from 'store/auth';
import Register from 'pages/Register/Register';

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      dispatch(storeSetIsLogin(true));
      return;
    }

    // navigate('/login');
    dispatch(storeSetIsLogin(false));
  }, [])

  const createRouteChild = (route: RouterItemInterface, index: number) => {
    const Component: any = route?.desktop || <></>
    const Layout: any = route.layout || EmptyLayout
    if (route.private) {
      return <React.Fragment key={index}>{PrivateRoute({ component: Component, Layout, ...route })}</React.Fragment>;
    } else {
      return <React.Fragment key={index}>{PublicRoute({ component: Component, Layout, ...route })}</React.Fragment>;
    }
  }

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='/' element={<><Outlet /></>}>
          {routers.map(createRouteChild)}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
