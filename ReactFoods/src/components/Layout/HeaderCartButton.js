import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CartIcon from "../Cart/CartIcon";
//import CartContext from "../../store/context/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighLighted, setBtnIsHighlighted] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  // const numberOfCartItems = cartItems.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0);

  const numberOfCartItems = useSelector((state) => state.cart.totalQuantity);

  const btnClasses = `${classes.button} ${
    btnIsHighLighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(false);
    };
  }, [cartItems]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
