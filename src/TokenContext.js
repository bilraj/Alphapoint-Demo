import React from 'react';

const TokenContext = React.createContext();
export default class TokenProvider extends Component {

    state = {
        assetType: '',
        specificAssetType: '',
        tokenContract: "one",
        token: {
            name: "",
            symbol: "",
            decimals: 0,
            date: "",
            companyName: "",
            issuanceType: "",
            country: ""
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
