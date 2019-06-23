import React, { Component } from 'react';
import { WalletConsumer } from '../../../WalletContext';
import styled from 'styled-components'
import { ButtonContainer } from '../../Button';
import SelectBox from '../../../features/select-box';
import './styles.css';

export default class SendModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.persist();
        this.setState(() => {

            return {
                value: event.target.value
            }
        })

    }

    clear = () => {
        this.setState(() => {
            return {
                value: ''
            }
        })
    }

    render() {
        return (
            <WalletConsumer>
                {(value) => {
                    const { modalOpen, toggleModal, updateBalance, balance, symbol } = value;

                    // 0 is sendModal
                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            <ModalWrapper>
                                <div className="modal-container">
                                    <div id="modal">
                                        <div className="modal-header">
                                            <div>
                                                <i className="fas fa-paper-plane fa-lg"></i>
                                                <span id="send-bitcoin">Send Bitcoin</span>
                                            </div>
                                            <SendConsumer>
                                                {(obj) => {
                                                    return (
                                                        <div style={{ cursor: "pointer" }} onClick={() => {
                                                            toggleModal();
                                                            obj.setSufficientBalance(true);
                                                        }}
                                                        >
                                                            <i className="far fa-window-close fa-lg"></i>
                                                        </div>
                                                    )
                                                }}
                                            </SendConsumer>

                                        </div>

                                        <div className="modal-body">
                                            <div className="currency-from">

                                                <div id="currency">
                                                    <span style={{ fontSize: "1rem", float: "left" }} >Currency</span>
                                                    <SelectBox
                                                        items={[
                                                            { value: 'Bitcoin', id: 1, sym: 'BTC', symbol: 'fa-bitcoin' },
                                                            { value: 'Ethereum', id: 2, sym: 'ETH', symbol: 'fa-ethereum' }
                                                        ]}
                                                    />
                                                </div>


                                                <div id="from">
                                                    <span style={{ fontSize: "1rem" }}>From</span>
                                                    <FromBox
                                                        items={[
                                                            { value: 'My Bitcoin Wallet', id: 1, sym: 'BTC', symbol: 'fa-bitcoin' },
                                                            { value: 'My Ethereum Wallet', id: 2, sym: 'ETH', symbol: 'fa-ethereum' }
                                                        ]}
                                                        balance={balance}
                                                    />
                                                </div>
                                            </div>

                                            <div id="to">
                                                <div><span>To</span></div>
                                                <ToBox />
                                            </div>


                                            <SendConsumer>
                                                {(value) => {
                                                    const { sufficientBalance } = value;
                                                    var words = sufficientBalance ? "" : "Insufficient Funds";
                                                    return (
                                                        <div className="usd-btc">
                                                            <div>
                                                                <span >Amount</span>
                                                                {/* <span
                                                                    style={{ position: "relative", float: "right", fontSize: "12px", color: sufficientBalance ? "green" : "red" }} hidden
                                                                >{words}</span> */}
                                                                <span style={{ position: "relative", float: "right", color: "red", fontSize: "12px" }}>{words}</span>
                                                            </div>
                                                            <div className="usd-btc-inner">
                                                                <AmountBox currency="BTC" placeholder="$0.00" />
                                                                <span id="equals">=</span>
                                                                <ReadOnlyAmountBox placeholder="0"
                                                                    style={{ float: "right" }} />
                                                            </div>
                                                        </div>
                                                    )
                                                }}
                                            </SendConsumer>

                                            <div className="description">
                                                <div><span >Description</span></div>
                                                <DescriptionBox placeholder="What's the transaction for? (optional)" />
                                            </div>


                                            <SendConsumer>
                                                {(val) => {
                                                    const { currency, amount, convertedValue, toAddress, description } = val;
                                                    var obj = {
                                                        currency: currency, amount: amount, convertedValue: convertedValue, toAddress: toAddress, description: description
                                                    };

                                                    return (
                                                        <div className="send-button">
                                                            <ButtonContainer style={{ height: "40px" }}
                                                                onClick={() => {
                                                                    value.addTransaction(obj);
                                                                    updateBalance(convertedValue, false, currency);
                                                                    toggleModal();
                                                                }}
                                                            >Send </ButtonContainer>
                                                        </div>
                                                    )
                                                }}
                                            </SendConsumer>




                                        </div>
                                    </div>
                                </div>

                            </ModalWrapper>
                        )
                    }

                }}
            </WalletConsumer>

        );
    }
}

const ModalWrapper = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background: rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal {
    background: #ffffff;
    height: 100%;
    width: 100%;
}
`

