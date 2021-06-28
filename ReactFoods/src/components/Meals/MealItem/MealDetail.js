import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/redux/cart-slice";
import Card from "../../UI/Card";
import classes from "./MealDetail.module.css";

const MealDetail = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = (props) => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        title: props.title,
        quantity: 1,
        price: props.price,
      })
    );
  };

  return (
    <section>
      <Card>
        <div className={classes.productdata}>
          <div className={classes.productimage}>
            <img src={props.image} alt={props.desc} />
          </div>
          <div className={classes.producttext}>
            <h2>{props.title}</h2>
            <button>
              <h4>{props.price} kr</h4>
            </button>
            <h5>{props.short}</h5>
            <p>{props.desc}</p>
            <div className={classes.productactions}>
              <button className={classes.outline}>Tillbaka till menyn</button>
              <button onClick={addToCartHandler}>+</button>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default MealDetail;
