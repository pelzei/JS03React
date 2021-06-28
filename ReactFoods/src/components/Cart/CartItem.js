import { useDispatch } from "react-redux";
import { cartActions } from "../../store/redux/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const itemPrice = `${props.price} kr`;
  const dispatch = useDispatch();

  const { id, title, price } = props;
  console.log(id);

  const removeFromCartHandler = (props) => {
    dispatch(cartActions.removeItemFromCart(props));
  };

  const addToCartHandler = (props) => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        quantity: 1,
        price,
      })
    );
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.title}</h2>
        <div className={classes.summary}>
          <span className={classes.amount}>
            {props.quantity} {props.quantity > 1 ? "portioner" : "portion"}
          </span>
          <span className={classes.price}>à {itemPrice}</span>
          <span className={classes.sum}>
            = {props.quantity * props.price} kr
          </span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={removeFromCartHandler}>−-</button>
        <button onClick={addToCartHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
