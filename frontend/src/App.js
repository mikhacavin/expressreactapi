import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="column">
          <div className="column is-half is-offset-one-quarter">
            <Switch>
              <Route exact path="/">
                <ProductList />
              </Route>
              <Route exact path="/add">
                <AddProduct />
              </Route>
              <Route exact path="/edit/:id">
                <EditProduct />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
