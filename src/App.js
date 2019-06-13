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
import Wallet from './store/Wallet';
import Dashboard from './store/Wallet/Dashboard';
import BuySell from './store/Wallet/BuySell';
import Menu from './store/Wallet/Menu';

const hide = ({props}) => {
  const { location } = props;
  if (location.pathname.match('/')) {
    console.log("DSAJNDSKAJ")
    return null;
  }
  console.log("IT WORKDED"
  )
  return (<Menu />);
}

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/wallet" component={Wallet} />
        <Route exact path="/wallet/dashboard" component={Dashboard} />
        <Route exact path="/wallet/buy-sell" component={BuySell} />


        <Route component={Def} />
      </Switch>
      <Modal />

    </div>

  );
}

export default App;
