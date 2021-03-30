import React, { Suspense, lazy, useEffect } from 'react';
import { Switch} from 'react-router-dom';
import AppBar from 'components/AppBar';
import Container from 'components/Container/container'; 
import authOperations from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const HomeView = lazy(() => import('views/HomeView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
   }, [dispatch]);


    return (
      <Container>
        <AppBar />
        <Suspense fallback={
          <Loader
                type="Circles"
                color="#00BFFF"
                height={100}
                width={100}
          />
        }>
        <Switch>

            <PublicRoute exact path="/">
              <HomeView />
              </PublicRoute>

          <PublicRoute
            path="/register"
            restricted
              redirectTo="/contacts">
              <RegisterView/>
              </PublicRoute>

          <PublicRoute
            path="/login"
            restricted
              redirectTo="/contacts">
              <LoginView />
               </PublicRoute>

          <PrivateRoute
              path="/contacts"
              redirectTo="/login">
            <ContactsView />
              </PrivateRoute>
              
          </Switch>
          </Suspense>
      </Container>
    );
  }






