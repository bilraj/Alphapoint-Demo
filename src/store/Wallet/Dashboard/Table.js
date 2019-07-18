import React, { Component } from 'react';
import "./styles.css";


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

    calculateTotalBalance = (balances) => {
        var total = 0;

        balances.forEach((element) => {
            total += (element.balance / element.conversionRate);
        })
        return total;


    }

    localize = (num) => {
        return parseFloat(num.toFixed(2)).toLocaleString(navigator.language, { minimumFractionDigits: 2 });
    }

    fix = (num) => {
        return parseFloat(num).toFixed(2);
    }

    render() {
        const { balances } = this.props.value;
        var totalBalance = this.localize(this.calculateTotalBalance(balances));
        
        return (
            <div className="noselect table-container-1">
                <div className="table-header">
                    <div className="left-header">
                        <span className="balance-table-words noselect">Total Balance</span>
                    </div>
                    <div className="right-header noselect">
                        <span className="balance-table-words" id="total-balance-number">${totalBalance}</span>
                    </div>
                </div>

                <div>
                    {
                        balances.map((item) => {
                            var balance = this.localize(item.balance / item.conversionRate);
                            console.log(balance);
                            return (
                                <div key={item.id} className="usd-pax">
                                    <div className="left-header">
                                        <span style={{ marginRight: "8px" }}><i className={item.logo}></i></span>
                                        <span id="usd-pax" className="balance-table-words">{item.name}</span>
                                    </div>
                                    <div className="right-header" style={{position: "relative"}}>
                                        <span className="balance-table-words" id="total-balance-number">${balance}</span>
                                        <span style={{width:"200px", textAlign:"right"}} id="pax">{this.localize(item.balance)} {item.name}</span>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>



                {/* Name: <input value={this.state.value} onChange={this.handleChange} type="text" placeholder="New currency" />
                            <button onClick={this.handleClick}>Add</button> */}
            </div>
        )
    }
}
