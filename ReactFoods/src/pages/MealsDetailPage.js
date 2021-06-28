import { useParams } from "react-router-dom";
import MealDetail from "../components/Meals/MealItem/MealDetail";

const MealsDetailPage = () => {
  const params = useParams();
  console.log(params);

  return <MealDetail />;
};

export default MealsDetailPage;
