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
import Dashboard from './store/Wallet/Dashboard/Dashboard';
import BuySell from './store/Wallet/BuySell';
import Menu from './store/Wallet/Menu';
import SendModal from './store/Wallet/SendModal/SendModal';
import Transactions from './store/Wallet/Transactions';

const hide = ({props}) => {
  const { location } = props;
  if (location.pathname.match('/')) {
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
        <Route exact path="/wallet/dashboard" component={Dashboard} />
        <Route exact path="/wallet/buy-sell" component={BuySell} />
        <Route exact path="/wallet/transactions" component={Transactions} />
        <Route component={Def} />
      </Switch>
      <Modal />
      <SendModal />

    </div>

  );
}

export default App;
