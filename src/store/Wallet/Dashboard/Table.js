import React, { Component } from 'react';
import "./styles.css";
import { WalletConsumer } from '../../../WalletContext';

export default class Table extends Component {
    render() {
        return (
            <WalletConsumer>
                {(value) => {
                    const { totalBalance } = value;
                    return (
                        <div className="table-container">
                            <div className="table-header">
                                <div className="left-header">
                                    <span className="table-words">Total Balance</span>
                                </div>
                                <div className="right-header">
                                    <span className="table-words" id="total-balance-number">${totalBalance}</span>
                                </div>
                            </div>

                            <div className="usd-pax">
                                <div className="left-header">
                                    <span id="usd-pax" className="table-words">USD PAX</span>
                                </div>
                                <div className="right-header">
                                        <span className="table-words" id="total-balance-number">$0.00</span>
                                        <span id="pax">0.00 PAX</span>
                                </div>
                            </div>
                            <div className="bitcoin">
                                <div className="left-header">
                                    <span id="bitcoin" className="table-words">Bitcoin</span>
                                </div>
                                <div className="right-header">
                                    <span className="table-words" id="total-balance-number">${totalBalance}</span>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </WalletConsumer>

        );
    }
}
