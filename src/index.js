import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router } from 'react-router-dom';

import { ProductProvider } from './Context';
import WalletProvider from './WalletContext';
import { SendProvider } from './store/Wallet/SendModal/SendContext';
import LoginProvider from './LoginContext';
import TokenProvider from './TokenContext';

ReactDOM.render(
    <TokenProvider>
        <LoginProvider>
            <ProductProvider>
                <WalletProvider>
                    <SendProvider>
                        <Router><App /></Router>

                    </SendProvider>

                </WalletProvider>
            </ProductProvider>
        </LoginProvider>
    </TokenProvider>


    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
