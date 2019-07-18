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
import { WalletConsumer } from '../WalletContext';
import Register from '../Register/Register';
import Checkout from '../store/Checkout/Checkout';
import ThankYou from '../store/Checkout/ThankYou';



export default class Login extends Component {
    render() {
        return (
            <WalletConsumer>
                {(walletValue) => {
                    var props = {value:{walletValue}}
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
                                            <Route exact path="/wallet/tokenize" render={(props) => <Tokenize {...props} isAuthed={true} value={walletValue} component={Tokenize} />} />
                                            <Route exact path="/register" component={Register}/>
                                            <Route exact path="/checkout" component={Checkout} />
                                            <Route exact path="/checkout/confirmation" component={ThankYou} />
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
                    )
                }}
            </WalletConsumer>


        );
    }
}
