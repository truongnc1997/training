import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./component/counter/Counter";
import TopMenu from "./component/top-menu/TopMenu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./products/Products";
import { CartProvider } from "./context/Cart";
import CartDetail from "./component/cart-detail/CartDetail";
import Select from "./component/select-product/Select";

const home = () => <h2>home</h2>;

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu></TopMenu>
          <Route path="/products/" exact component={Products} />
          <Route path="/" exact component={home} />
          <Route path="/cart-detail/" exact component={Select} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
