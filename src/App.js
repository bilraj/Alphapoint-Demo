import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from 'react-router-dom';

import ProductList from './store/ProductList';
import Details from './store/Details';
// import Cart from './store/Cart';
import Navbar from './store/Navbar';
import Cart from './store/Cart';
import Def from './store/Def';
import Modal from './store/Modal';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/cart" component={Cart} />
        <Route component={Def} />
      </Switch>
      <Modal />

    </div>

  );
}

export default App;
