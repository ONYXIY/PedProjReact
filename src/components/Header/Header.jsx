import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return <header className={classes.header}>
    <img alt='logo' src='#'></img >
    <div className={classes.loginBlock}>
      {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
    </div>
  </header>;
}
export default Header;