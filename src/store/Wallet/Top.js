import React, { Component } from 'react';
import { ButtonContainer } from '../Button';
import { WalletConsumer } from '../../WalletContext';

export default class Top extends Component {
    render() {
        return (
            <WalletConsumer>
                {(value) => {
                    const { toggleModal, balance } = value;
                    return (
                        <React.Fragment>
                            <div className="d-flex" style={{ height:"fit-content", width:"100%", marginBottom:"20px"}}>
                                <div className="ml-4 mt-2" >
                                    <ButtonContainer onClick={() => toggleModal()}>Send</ButtonContainer>
                                    <ButtonContainer>Request</ButtonContainer>

                                    <span style={{ color: 'var(--lightBlue)', position:"absolute", right:"0" }}><h3>Balance: {balance}</h3></span>
                                </div>

                            </div>

                        </React.Fragment>
                    )
                }}
            </WalletConsumer>

        );
    }
}