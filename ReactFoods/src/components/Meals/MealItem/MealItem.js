import { useDispatch } from "react-redux";

import { cartActions } from "../../../store/redux/cart-slice";
import { Link } from "react-router-dom";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const dispatch = useDispatch();

  const price = `${props.price} kr`;

  const addToCartHandler = (amount) => {
    dispatch(
      cartActions.addItemToCart({
        key: props.id,
        id: props.id,
        title: props.title,
        short: props.short,
        quantity: amount,
        price: props.price,
        image: props.image,
      })
    );
  };

  return (
    <li className={classes.meal}>
      <div className={classes.mealimage}>
        <img src={props.image} alt={props.short} />
      </div>
      <div className={classes.description}>
        <h3>{props.title}</h3>
        <div>{props.short}</div>
        <div className={classes.price}>
          <div>{price}</div>
          <div>
            <Link to={`/MealsDetails/${props.id}`}>
              <button>Läs mer</button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
