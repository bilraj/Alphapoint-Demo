import React, { Component } from 'react';
import Menu from './Menu';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import BuySell from './BuySell';
import ProductList from '../ProductList';
import { BrowserRouter as Router } from 'react-router-dom';
import Top from './Top';

export default class Wallet extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{ border: "1px solid black", position: 'relative' }} className="container-fluid d-flex align-items-start">
                    {/* <Menu />
                    <Top /> */}
                    <Dashboard />
                    <Switch>
                        <Route exact path="/wallet/buy-sell" component={BuySell} />
                    </Switch>
                </div>


            </React.Fragment>


        );
    }

}


