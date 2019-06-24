import React, { Component } from 'react';
import "./styles.css";
import { WalletConsumer } from '../../../WalletContext';
import { TokenConsumer } from '../../../TokenContext';


export default class Table extends Component {
    state = {
        currencies: [
            { id: 0, name: "BTC", balance: 0, conversionRate: 0, logo: "fab fa-bitcoin" },
            { id: 1, name: "Monero", balance: 0, conversionRate: 0, logo: "fab fa-monero" },
            { id: 2, name: "Ethereum", balance: 0, conversionRate: 0, logo: "fab fa-ethereum" },
            { id: 3, name: "Ripple", balance: 0, conversionRate: 0, logo: "fas fa-box" }
        ],

        value: "",
        haveToken: false
    }

    componentDidMount = () => {

        if (localStorage.getItem("currencies") !== null) {
            this.setState(() => {
                return {
                    currencies: JSON.parse(localStorage.getItem("currencies"))
                }
            })
        }
        else {
            const { balances } = this.props.value;
            var newCurrencies = this.state.currencies.filter(item => item.id !== 0);
            const newBtc = { id: 0, name: "BTC", balance: balances[0].balance, conversionRate: 10558, logo: "fab fa-bitcoin" };

            this.setState(() => {
                return {
                    currencies: [...newCurrencies, newBtc]
                }
            })
        }

        if (localStorage.getItem("haveToken") !== null) {
            this.setState(() => {
                return {
                    currencies: JSON.parse(localStorage.getItem("haveToken"))
                }
            })
        }


        console.log("BALANCE HERE IS: " + this.state.currencies[0].balance)

    }

    handleClick = () => {
        const temp = this.state.value;
        const index = this.state.currencies.length;
        const newCurrency = { id: index, name: temp, balance: 0, conversionRate: 0 }
        console.log(JSON.stringify(newCurrency, null, 4));
        this.setState(() => {
            return {
                currencies: [...this.state.currencies, newCurrency]
            }
        },
            localStorage.setItem("currencies", JSON.stringify(this.state.currencies)))
    }

    handleChange = (event) => {
        event.persist();
        this.setState(() => {
            return {
                value: event.target.value,
            }
        })
    }

    render() {

        return (
            <WalletConsumer>
                {(value) => {
                    const { balances } = value;
                    const balance = balances[0].balance;
                    if(balances.length > 1) {
                        balance += balances[1].balance;
                    }

                    const usd = parseFloat((balance * 10601).toFixed(2)).toLocaleString(navigator.language, { minimumFractionDigits: 0 });
                    const adjusted = parseFloat((balance * 1).toFixed(2));
                    return (
                        <div className="table-container-1">
                            <div className="table-header">
                                <div className="left-header">
                                    <span className="balance-table-words">Total Balance</span>
                                </div>
                                <div className="right-header">
                                    <span className="balance-table-words" id="total-balance-number">${usd}</span>
                                </div>
                            </div>

                            <TokenConsumer>
                                {(val) => {
                                    const { haveToken, balance } = val;
                                    const { name, symbol, id } = val.token;

                                    var item = {
                                        id: id,
                                        name: name,
                                        balance: balance,
                                        symbol: symbol
                                    }

                                    return (
                                        <div>
                                            <div>
                                                {
                                                    this.state.currencies.map((item) => {
                                                        return (
                                                            <div key={item.id} className="usd-pax">
                                                                <div className="left-header">
                                                                    <span style={{ marginRight: "8px" }}><i className={item.logo}></i></span>
                                                                    <span id="usd-pax" className="balance-table-words">{item.name}</span>
                                                                </div>
                                                                <div className="right-header">
                                                                    <span className="balance-table-words" id="total-balance-number">${item.id === 0 ? usd : item.balance}</span>
                                                                    <span id="pax">{item.id === 0 ? adjusted : item.balance} {item.name}</span>
                                                                </div>
                                                            </div>

                                                        )
                                                    })
                                                }
                                            </div>
                                            {
                                                haveToken ? (<div key={item.id} className="usd-pax">
                                                    <div className="left-header">
                                                        <span style={{ marginRight: "8px" }}><i className={item.logo}></i></span>
                                                        <span id="usd-pax" className="balance-table-words">{item.name}</span>
                                                    </div>
                                                    <div className="right-header">
                                                        <span className="balance-table-words" id="total-balance-number">${item.id === 0 ? usd : item.balance}</span>
                                                        <span id="pax">{item.id === 0 ? adjusted : item.balance} {item.symbol}</span>
                                                    </div>
                                                </div>) : {}
                                            }
                                        </div>
                                    )
                                }}
                            </TokenConsumer>


                            {/* Name: <input value={this.state.value} onChange={this.handleChange} type="text" placeholder="New currency" />
                            <button onClick={this.handleClick}>Add</button> */}
                        </div>
                    )
                }}
            </WalletConsumer>

        );
    }
}
