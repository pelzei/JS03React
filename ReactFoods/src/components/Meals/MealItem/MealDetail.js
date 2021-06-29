import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cartActions } from "../../../store/redux/cart-slice";
import Card from "../../UI/Card";
import classes from "./MealDetail.module.css";

const MealDetail = () => {
  const { id } = useParams();
  console.log(id);
  const foods = useSelector((state) => state.foods.items);
  console.log(foods);

  const foodItem = foods.filter((foods) => foods.id === id)[0];
  console.log(foodItem);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: foodItem.id,
        title: foodItem.title,
        quantity: 1,
        price: foodItem.price,
      })
    );
  };
  console.log("SECOND", foodItem);
  return (
    <section className={classes.detailcard}>
      <Card>
        <div className={classes.productdata}>
          <div className={classes.productimage}>
            <img src={foodItem.image} alt={foodItem.desc} />
            <button className={classes.outline}>Tillbaka till menyn</button>
          </div>
          <div className={classes.producttext}>
            <div>
              <h2>{foodItem.title}</h2>
            </div>
            <div className={classes.productactions}>
              <h4>{foodItem.price} kr</h4>
              <button onClick={addToCartHandler}>Lägg till +</button>
            </div>
            <h5>{foodItem.short}</h5>
            <p>{foodItem.description}</p>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default MealDetail;
