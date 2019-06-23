import React, { Component } from 'react';
import "./styles.css";
import { WalletConsumer } from '../../../WalletContext';

export default class Table extends Component {
    state = {
        currencies: [
            { id: 0, name: "BTC", balance: 0, conversionRate: 0 },
            { id: 1, name: "USDPAX", balance: 0, conversionRate: 0 },
            { id: 2, name: "Stellar", balance: 0, conversionRate: 0 },
            { id: 3, name: "Ripple", balance: 0, conversionRate: 0 }

        ]
    }

    componentDidMount = () => {
        const { balance } = this.props.value;
        console.log("BALANCEEEE: " + balance[0])
        var newCurrencies = this.state.currencies.filter(item => item.id !== 0);
        const newBtc = { id: 0, name: "BTC", balance: balance[0], conversionRate: 10558 };
        // newCurrencies.concat(newBtc);

        this.setState(() => {
            return {
                currencies: [...newCurrencies, newBtc]
            }
        })
    }

    render() {

        return (
            <WalletConsumer>
                {(value) => {
                    const { totalBalance } = value;
                    console.log("TOTAL BALANCE: " + totalBalance)
                    const usdAmount = parseFloat((totalBalance * 10601).toFixed(2)).toLocaleString(navigator.language, { minimumFractionDigits: 0 });
                    return (
                        <div className="table-container">
                            <div className="table-header">
                                <div className="left-header">
                                    <span className="table-words">Total Balance</span>
                                </div>
                                <div className="right-header">
                                    <span className="table-words" id="total-balance-number">${usdAmount}</span>
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
                                    <span className="table-words" id="total-balance-number">${usdAmount}</span>
                                    <span id="pax">{totalBalance.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} Bitcoin</span>
                                </div>
                            </div>
                            <div>
                                {
                                    this.state.currencies.map((item) => {
                                        const usdAmount = parseFloat((item.balance * item.conversionRate).toFixed(2)).toLocaleString(navigator.language, { minimumFractionDigits: 0 });
                                        return (
                                            <div key={item.id} className="usd-pax">
                                                <div className="left-header">
                                                    <span id="usd-pax" className="table-words">{item.name}</span>
                                                </div>
                                                <div className="right-header">
                                                    <span className="table-words" id="total-balance-number">${usdAmount}</span>
                                                    <span id="pax">{item.usdAmount} {item.name}</span>
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            </div>

                        </div>
                    )
                }}
            </WalletConsumer>

        );
    }
}
