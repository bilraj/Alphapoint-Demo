import React, { Component } from 'react';

const WalletContext = React.createContext();

export default class WalletProvider extends Component {

    state = {
        balance: [100, 'BTC'],
        totalBalance: 0,
        modalOpen: false,
        transactions: [],
    }

    componentDidMount() {

        // Set totalBalance
        if (localStorage.getItem("balance") !== null) {
            const balance = JSON.parse(localStorage.getItem("balance"));
            this.setState(() => {
                return {
                    totalBalance: balance[0],
                    balance: balance
                }
            }, () => {
                console.log("JUST ADDED BALANCE: " + localStorage.getItem("balance"))
            })
        } else {
            this.setState(() => {
                return {
                    totalBalance: this.state.balance[0]
                }
            })
        }


        if (localStorage.getItem("transactions") !== null) {
            this.setState(() => {
                return {
                    transactions: JSON.parse(localStorage.getItem("transactions"))
                }
            })
        }
    }

    updateBalance = (amount, change, symbol) => {
        var newBalance = this.state.balance[0];

        if (change === true) {
            newBalance += amount;
        } else { newBalance -= amount; }

        this.setState(() => {
            return {
                balance: [newBalance, symbol],
                totalBalance: newBalance
            }
        }, () => {

            localStorage.setItem('balance', JSON.stringify(this.state.balance));
            localStorage.setItem('totalBalance', JSON.stringify(this.state.totalBalance));
        })
    }

    getTime = () => {
        const d = new Date();
        const month = d.getMonth();
        const day = d.getDate();
        const year = d.getFullYear();
        const hour = d.getHours();
        const minutes = d.getMinutes();
        const seconds = d.getSeconds();
        const date = `${month.toString()}/${day.toString()}/${year.toString()} ${hour}:${minutes}:${seconds}`;

        return date;
    }

    addTransaction = (transaction) => {
        // Get amount, convertedValue, currency, toAddress
        const { amount, convertedValue, currency, toAddress, description, flow, type } = transaction;
        console.log(`Amount: ${amount}, ConvertedVal: ${convertedValue}, currency: ${currency}, toAddress: ${toAddress}, description: ${description}`)

        /* transaction {
            "Transaction id: [
                "amount" : ;
                "convertedVal: ";
                "currency: ";
                "toAddress: ";
                "description: ";
                "timestamp: ";
                "Type: (Could be buy/sell/store purchase)"
            ] " 
        } */

        const date = this.getTime();

        var id = new Date().valueOf();;

        const newTransaction = {
            id: id,
            date: date,
            amount: amount,
            convertedVal: convertedValue,
            currency: currency,
            toAddress: toAddress,
            description: description,
            type: type,
            flow: flow
        }

        var temp = this.state.transactions.concat(newTransaction);
        this.setState((prevState) => {
            return {
                transactions: [...temp]
            }
        }, () => {
            console.log("TRANSACTIONS: " + JSON.stringify(this.state.transcations, null, 4));
            localStorage.setItem('transactions', JSON.stringify(this.state.transactions));
        })
    }

    toggleModal = () => {
        this.setState(() => {
            return {
                modalOpen: !this.state.modalOpen
            }
        }, () => {
            localStorage.setItem('modalOpen', JSON.stringify(this.state.modalOpen));
        })
    }

    render() {
        return (
            <WalletContext.Provider value={{
                ...this.state,
                updateBalance: this.updateBalance,
                toggleModal: this.toggleModal,
                addTransaction: this.addTransaction,
            }}>
                {this.props.children}
            </WalletContext.Provider>
        );
    }
}

const WalletConsumer = WalletContext.Consumer;

export { WalletConsumer, WalletProvider };