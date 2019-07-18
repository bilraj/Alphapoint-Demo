import React, { Component } from 'react';

const SendContext = React.createContext();

class SendProvider extends Component {
    state = {
        currency: 'BTC',
        amount: 100,
        name: 'Bitcoin',
        convertedValue: 0,
        sufficientBalance: true,
        toAddress: '',
        description: ''
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