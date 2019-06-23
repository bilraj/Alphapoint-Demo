import React, { Component } from 'react';

const WalletContext = React.createContext();

export default class WalletProvider extends Component {

    state = {
        balance: [100, 'BTC'],
        totalBalance: 0,
        modalOpen: false,
        transcations: {},
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

        // if (localStorage.getItem('balance') !== null) {
        //     let value = JSON.parse(localStorage.getItem('balance'));
        //     this.setState(() => {
        //         return { 'balance': value }
        //     }, () => console.log("Balkkkkkkkkkkkkkkkkk: " + this.state.balance)
        //     )
        // }
        // if (localStorage.getItem('modalOpen') !== null) {
        //     let value = JSON.parse(localStorage.getItem('modalOpen'));
        //     this.setState(() => {
        //         return { 'modalOpen': value }
        //     })
        // }


    }

    updateBalance = (amount, change, symbol) => {
        console.log("DSJNADJSABJKDSBA: " + this.state.balance)
        var newBalance = this.state.balance[0];

        if (change === true) {
            newBalance += amount;
        } else { newBalance -= amount; }
        console.log("NIGGA BALANCE IS: " + newBalance)

        this.setState(() => {
            return {
                balance: [newBalance, symbol],
                totalBalance: newBalance
            }
        }, () => {

            localStorage.setItem('balance', JSON.stringify(this.state.balance));
            localStorage.setItem('totalBalance', JSON.stringify(this.state.totalBalance));
            console.log("BALANCE ISssssssssssssss : " + this.state.balance)
        })
    }

    addTransaction = (transaction) => {
        // Get amount, convertedValue, currency, toAddress
        const { amount, convertedValue, currency, toAddress, description } = transaction;
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