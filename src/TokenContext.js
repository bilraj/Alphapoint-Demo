import React from 'react';

const TokenContext = React.createContext();
export default class TokenProvider extends React.Component {

    state = {
        tokens: [
            {
                id: "",
                name: "",
                symbol: "",
                decimals: 0,
                date: "",
                companyName: "",
                issuanceType: "",
                country: "",
                balance: 0
            }
        ]
    }

    componentDidMount() {
        if (localStorage.getItem("token")) {
            const temp = JSON.parse(localStorage.getItem("token"))
            this.setState(() => {
                return {
                    token: { ...temp },
                    haveToken: true
                }
            }, () => {
            })
        }
    }

    render() {
        return (
            <TokenContext.Provider value={{
                ...this.state,
            }}>
                {this.props.children}
            </TokenContext.Provider>
        );
    }
}


const TokenConsumer = TokenContext.Consumer;

export { TokenProvider, TokenConsumer };