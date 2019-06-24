import React, { Component } from 'react';
import LoginFields from './LoginFields';
import './styles.css';
import LoginImage from './LoginImage';
import { LoginConsumer } from '../LoginContext';
import ProductList from '../store/ProductList';
import Details from '../store/Details';
// import Cart from './store/Cart';
import Navbar from '../store/Navbar';
import Cart from '../store/Cart';
import Def from '../store/Def';
import Modal from '../store/Modal';
import Dashboard from '../store/Wallet/Dashboard/Dashboard';
import BuySell from '../store/Wallet/BuySell';
import SendModal from '../store/Wallet/SendModal/SendModal';
import Transactions from '../store/Wallet/Transactions/Transactions';
import { Switch, Route } from 'react-router-dom';
import Tokenize from '../Tokenize/Tokenize';



export default class Login extends Component {
    render() {
        return (
            <LoginConsumer>
                {(value) => {
                    const { loggedIn } = value;
                    return (
                        loggedIn ? <div>
                            <Navbar />
                            <Switch>
                                {/* <Route exact path="/" component={ProductList} /> */}
                                <Route exact path="/" component={ProductList} />
                                <Route exact path="/details" component={Details} />
                                <Route exact path="/cart" component={Cart} />
                                <Route exact path="/wallet/dashboard" component={Dashboard} />
                                <Route exact path="/wallet/buy-sell" component={BuySell} />
                                <Route exact path="/wallet/transactions" component={Transactions} />
                                <Route exact path="/wallet/tokenize" component={Tokenize} />
                                <Route component={Def} />
                            </Switch>
                            <Modal />
                            <SendModal />
                        </div> : <div className="login-page-container">
                                <LoginFields />
                                <LoginImage />
                            </div>
                    )
                }}
            </LoginConsumer>

        );
    }
}
