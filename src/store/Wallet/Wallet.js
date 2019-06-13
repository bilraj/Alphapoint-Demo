import React, { Component } from 'react';
import Menu from './Menu';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import BuySell from './BuySell';
import ProductList from '../ProductList';
import { BrowserRouter as Router } from 'react-router-dom';

export default class Wallet extends Component {
    render() {
        return (
            <React.Fragment>
                <Menu />
                <Router>
                    <Switch>
                        <Route exact path="/wallet/dashboard" component={Dashboard} />
                        <Route exact path="/wallet/buy-sell" component={BuySell} />
                    </Switch>
                </Router>

            </React.Fragment>


        );
    }
}
