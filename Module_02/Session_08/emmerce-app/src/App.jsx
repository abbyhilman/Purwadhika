import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import History from "./pages/History";
import ProductDetail from "./pages/ProductDetail";
import MyNavBar from "./component/MyNavbar";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MyNavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route component={Login} path="/login" />
          <Route component={Register} path="/register" />
          <Route component={Admin} path="/admin" />
          <Route component={Cart} path="/cart" />
          <Route component={History} path="/history" />
          <Route component={ProductDetail} path="/product-detail" />
          <Route component={Home} path="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
