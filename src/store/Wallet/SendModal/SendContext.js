import React, { Component } from 'react';

const SendContext = React.createContext();

class SendProvider extends Component {
    state = {
        currency: 'BTC',
        amount: 0,
        convertedValue: 0,
        sufficientBalance: true,
        toAddress: '',
        description: ''
    }

    convertValue = (amount, symbol) => {

        if (typeof (amount) == "number") {
            const sym = this.state.currency;
            console.log("Converting: " + amount + " to " + this.state.currency)
            if (amount < 10) { this.setState({ convertedValue: 0 }); }
            if (sym == "BTC") {
                var newVal = parseFloat((amount * .00010).toFixed(6));
                this.setState({ convertedValue: newVal, amount: amount })
            }
            else if (sym == "ETH") {
                var newVal = amount * .0035;
                this.setState({ convertedValue: newVal, amount: amount })
            }
        }
    }

    setSufficientBalance = (isSufficient) => {
        console.log("SETTING SUF BAL TO : " + isSufficient)
        this.setState(() => {
            return {
                sufficientBalance: isSufficient
            }
        })
    }

    setToAddress = (address) => {
        // Verify to address
        if (address !== '') {
            this.setState(() => {
                return {
                    toAddress: address
                }
            })
        }
    }

    setDescription = (description) => {
        console.log("Setitng description: " + description)
        this.setState(() => {
            return {
                description: description
            }
        })
    }

    setCurrency = (currency) => {
        this.setState(() => {
            return {
                currency: currency
            }
        })
    }

    render() {
        return (
            <SendContext.Provider value={{
                ...this.state,
                setCurrency: this.setCurrency,
                convertValue: this.convertValue,
                setSufficientBalance: this.setSufficientBalance,
                setDescription: this.setDescription,
                setToAddress: this.setToAddress
            }}
            >
                {this.props.children}
            </SendContext.Provider>
        )
    }
}



const SendConsumer = SendContext.Consumer;
export { SendConsumer, SendProvider };