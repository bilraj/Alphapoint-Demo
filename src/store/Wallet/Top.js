import React, { Component } from 'react';
import { ButtonContainer } from '../Button';
import { WalletConsumer } from '../../WalletContext';
import { TokenConsumer } from '../../TokenContext';

export default class Top extends Component {
    render() {
        return (
            <WalletConsumer>
                {(value) => {
                    const { toggleModal, balances } = value;

                    const bal = parseFloat((balances[0].balance * 1).toFixed(2));
                    return (
                        <TokenConsumer>
                            {(val) => {
                                const { haveToken, balance } = val;
                                const { symbol } = val.token;

                                return (
                                    <React.Fragment>
                                        <div className="d-flex" style={{ height: "fit-content", width: "100%", marginBottom: "20px" }}>
                                            <div className="ml-4 mt-2" >
                                                <ButtonContainer onClick={() => toggleModal()}>Send</ButtonContainer>
                                                <ButtonContainer>Request</ButtonContainer>
                                                {haveToken ? (<span style={{ color: 'var(--lightBlue)', position: "absolute", right: "0" }}>
                                                    <h3>Balance: {balance} {symbol}</h3></span>) :
                                                (<span style={{ color: 'var(--lightBlue)', position: "absolute", right: "0" }}>
                                                    <h3>Balance: {bal} {balances[0].name}</h3></span>)}
                                            </div>

                                        </div>
                                    </React.Fragment>
                                )
                            }}
                        </TokenConsumer>

                    )
                }}
            </WalletConsumer>

        );
    }
}