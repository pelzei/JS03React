import { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import MealsDetailPage from "./pages/MealsDetailPage";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/Meals" exact />
          </Route>
          <Route path="/Meals">
            <Meals />
          </Route>
          <Route path="/MealsDetails/:id">
            <MealsDetailPage />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
