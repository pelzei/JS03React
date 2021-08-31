import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Card from "../UI/Card";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import cartActions from "../../store/redux/cart-slice";
import Checkout from "./Checkout";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart.items);
  const cartTotal = useSelector((state) => state.cart);

  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `${cartTotal.totalAmount} kr`;
  const hasItems = cartState.length > 0;

  const cartItemRemoveHandler = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const cartItemAddHandler = (item) => {
    dispatch(
      cartActions.addItemToCart({
        id: item.id,
        quantity: 1,
        price: item.price,
      })
    );
    //dispatch(cartActions.addItemToCart({ id, quantity = 1 }));
  };

  /*const clearCart = () => {
    dispatch(
      cartActions.clearCart({
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
      })
    );
  };*/

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartState.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          quantity={item.quantity}
          price={item.price}
          onRemove={cartItemRemoveHandler}
          onAdd={cartItemAddHandler}
        />
      ))}
    </ul>
  );

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://axios-test-1827b-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartState.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    //clearCart();
  };

  const modalActions = (
    <div className={classes.actions}>
      <Link to="/meals">
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </Link>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Beställ
        </button>
      )}
    </div>
  );

  const cartContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Summa:</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  const isSubmittingContent = <p>Sending order data ...</p>;
  const didSubmitContent = (
    <React.Fragment>
      <p>
        Din order har skickats in och kommer skyndsamt att ställas i ordning!
      </p>{" "}
      <div className={classes.actions}>
        <Link to="/meals">
          <button className={classes.button} onClick={props.onClose}>
            Close
          </button>
        </Link>
      </div>
    </React.Fragment>
  );

  return (
    <section className={classes.cartcard}>
      <Card>
        {!isSubmitting && !didSubmit && cartContent}
        {isSubmitting && !didSubmit && isSubmittingContent}
        {!isSubmitting && didSubmit && didSubmitContent}
      </Card>
    </section>
  );
};

export default Cart;
