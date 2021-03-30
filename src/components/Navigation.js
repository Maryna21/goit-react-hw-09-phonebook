import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#4251f5',
  },
};

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated)
  
return (
      <nav>
        <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
          Головна
    </NavLink>
    {isAuthenticated && <NavLink
      to="/contacts"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Контакти
    </NavLink>}
      </nav>
);
  }




