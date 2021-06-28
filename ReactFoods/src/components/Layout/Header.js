import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import React from "react";

const Header = (props) => {
  const showProfile = useSelector((state) => state.auth.isAuth);

  return (
    <header className={classes.header}>
      <Link to="/Meals">
        <h1>ReactFoods</h1>
      </Link>
      {showProfile && <Link to="/Profile">Profile</Link>}
      <Link to="/Cart">
        <HeaderCartButton onClick={props.onShowCart} />
      </Link>
      <Link to="/Login">Log in</Link>
    </header>
  );
};

export default Header;
