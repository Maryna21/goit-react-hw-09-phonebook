import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav';
import authSelectors from 'redux/auth/auth-selectors';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  // const token = useSelector(authSelectors.getToken);

return (
  <header style={styles.header}>
    <Navigation />
{/* {token && <Loader
                type="Circles"
                color="#00BFFF"
                height={100}
                width={100}
          />} */}
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);
  }


