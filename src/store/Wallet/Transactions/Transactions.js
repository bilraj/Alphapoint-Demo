import React, { Component } from 'react';
import Menu from '../Menu';
import Top from '../Top';
import Table from '../Dashboard/Table';
import 'react-table/react-table.css';
import { WalletConsumer } from '../../../WalletContext';
import TransactionTable from './TransactionsTable';


export default class Dashboard extends Component {
    render() {
        return (
            <WalletConsumer>
                {(value) => {
                    return (
                        <div className="cont">
                            <div style={{ height: "100%" }} className="d-flex flex-direction-column">
                                <Menu />
                                <div className="container-fluid" id="top-balance" >
                                    <Top />
                                    <TransactionTable value={value} />
                                </div>
                            </div>

                        </div>
                    )
                }}
            </WalletConsumer>


        );
    }
}
