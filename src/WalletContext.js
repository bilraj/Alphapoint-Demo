import React, { Component } from 'react';
import { balances } from './currencydata';

const WalletContext = React.createContext();

export default class WalletProvider extends Component {

    state = {
        balances: [],
        modalOpen: false,
        transactions: [],
        nextId: 4,
        send: {
            selectedItem: { sym: "", name: "", balance: 0, conversionRate: 0, id: 0, logo: "" },
            amount: '',
            convertedVal: '',
            sufficientBalance: true,
            toAddress: '',
            description: ''
        },
        tokens: [],
    }

    componentDidMount() {

        // Set totalBalance
        if (localStorage.getItem("balances") !== null) {
            const temp = JSON.parse(localStorage.getItem("balances"));
            this.setState(() => {
                return {
                    balances: temp
                }
            }, () => console.log("Found balances"))
        } else {
            this.setState(() => {
                return {
                    balances: balances
                }
            }, () => {
                localStorage.setItem("balances", JSON.stringify(this.state.balances))
            })
        }

        if (localStorage.getItem("transactions") !== null) {
            this.setState(() => {
                return {
                    transactions: JSON.parse(localStorage.getItem("transactions"))
                }
            })
        }
        if (localStorage.getItem("nextId") !== null) {
            this.setState(() => {
                return {
                    nextId: JSON.parse(localStorage.getItem("nextId"))
                }
            })
        }

        if (localStorage.getItem("send") !== null) {
            this.setState(() => {
                return {
                    send: JSON.parse(localStorage.getItem("send"))
                }
            })
        } else {
            let obj = this.state.send;
            obj.selectedItem = { sym: "BTC", name: "Bitcoin", balance: 100, conversionRate: "", id: 0, logo: "fab fa-bitcoin" };

            this.setState(() => {
                return {
                    send: obj
                }
            }, () => {
                localStorage.setItem("send", JSON.stringify(this.state.send))
            })
        }

        if (localStorage.getItem("tokens") !== null) {
            this.setState(() => {
                return {
                    tokens: JSON.parse(localStorage.getItem("tokens"))
                }
            })

        }


    }

    updateBalance = (amount, change, symbol) => {
        var temp = this.state.balances;
        var index = 0;

        for (var i = 0; i < temp.length; i++) {
            if (temp[i].name === symbol) {
                index = i;
                break;
            }
        }

        if (change === true) {
            temp[index].balance += amount;
        } else { temp[index].balance -= amount; }


        this.setState(() => {
            return {
                balances: temp,
            }
        }, () => {
            localStorage.setItem('balances', JSON.stringify(this.state.balances));
        })
    }

    addNewCurrency = (object) => {
        // { name: "Ethereum", balance: 0, id:2, logo: "fab fa-ethereum" },
        const { name, balance } = object;
        
        var temp = this.state.balances;
        var found = false;
        var index = 0;

        // If already in, append
        for (var i = 0; i < temp.length; i++) {
            if (temp[i].name === name) {
                index = i;
                found = true;
                alert("Found")
                break;
            }
        }

        if (found) {
            temp[index].balance += balance;

            this.setState(() => {
                return {
                    balances: temp
                }
            }, () => {
                localStorage.setItem("balances", JSON.stringify(this.state.balances));
            })
        } else {
            const nextId = this.state.nextId;
            object.id = nextId;

            // Add new
            const newTemp = { name: name, balance: balance, id: nextId, conversionRate: 1, logo: "" };
            this.setState(() => {
                return {
                    balances: [...this.state.balances, object],
                    nextId: nextId + 1
                }
            }, () => {
                localStorage.setItem("balances", JSON.stringify(this.state.balances));
                localStorage.setItem("nextId", JSON.stringify(this.state.nextId));
            })
        }
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
        const { amount, convertedValue, toAddress, description, flow, type } = transaction;
        const { sym } = transaction.selectedItem;

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


        /**     var obj = {
                        selectedItem: selectedItem, amount: amount, convertedValue: convertedVal, toAddress: toAddress, 
                        description: description, flow: flow, type: type
                    } */
        const date = this.getTime();

        var id = new Date().valueOf();;

        const newTransaction = {
            id: id,
            date: date,
            amount: amount,
            convertedVal: convertedValue,
            sym: sym,
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


    /* Send Context */

    convertValue = (amount) => {
        if (typeof (amount) == "number") {
            const { sym } = this.state.send.selectedItem;
            var index = 0;

            for (var x = 0; x < this.state.balances.length; ++x) {
                if (sym === this.state.balances[x].sym) {
                    index = x;
                    break;
                }
            }
            const { conversionRate } = this.state.balances[index];
            var newVal = parseFloat((amount * conversionRate).toFixed(6));
            var obj = this.state.send;
            obj.convertedVal = newVal;
            obj.amount = amount;

            this.setState(() => {
                return {
                    send: obj
                }
            })
        }
    }

    resetAmountBox = () => {
        var obj = this.state.send;
        obj.amount = '';
        obj.convertedVal = '';

        this.setState(() => {
            return {
                send: obj
            }
        })
    }

    setSufficientBalance = (isSufficient) => {
        var obj = this.state.send;
        obj.sufficientBalance = isSufficient;

        this.setState(() => {
            return {
                send: obj
            }
        })
    }

    setToAddress = (address) => {
        var obj = this.state.send;
        obj.toAddress = address;

        // Verify to address
        if (address !== '') {
            this.setState(() => {
                return {
                    send: obj
                }
            })
        }
    }

    setDescription = (description) => {
        var obj = this.state.send;
        obj.description = description;
        console.log("Setitng description: " + description)
        this.setState(() => {
            return {
                send: obj
            }
        })
    }

    setSelectedItem = (item) => {
        this.setState(() => {
            var obj = this.state.send;
            obj.selectedItem = item;
            return {
                send: obj
            }
        }, () => {
            localStorage.setItem("send", JSON.stringify(this.state.send));
        })
    }

    addToken = (object) => {
        this.setState((prevState) => {
            return {
                tokens: [...prevState.tokens, object]
            }
        }, () => {
            alert("Tokens: " + JSON.stringify(this.state.tokens))
            localStorage.setItem("tokens", JSON.stringify(this.state.tokens));
        })
    }

    render() {
        return (
            <WalletContext.Provider value={{
                ...this.state,
                updateBalance: this.updateBalance,
                toggleModal: this.toggleModal,
                addTransaction: this.addTransaction,
                addNewCurrency: this.addNewCurrency,
                convertValue: this.convertValue,
                setSufficientBalance: this.setSufficientBalance,
                setToAddress: this.setToAddress,
                setDescription: this.setDescription,
                setCurrency: this.setCurrency,
                setSelectedItem: this.setSelectedItem,
                resetAmountBox: this.resetAmountBox,
                addToken: this.addToken
            }}>
                {this.props.children}
            </WalletContext.Provider>
        );
    }
}

const WalletConsumer = WalletContext.Consumer;

export { WalletConsumer, WalletProvider };