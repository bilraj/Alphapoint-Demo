import React, { Component } from 'react';
import { WalletConsumer } from '../../../WalletContext';
import styled from 'styled-components'
import { ButtonContainer } from '../../Button';
import SelectBox from '../../../features/select-box';
import './styles.css';
import FromBox from './FromBox';
import ToBox from './ToBox';
import AmountBox from './AmountBox';

import DescriptionBox from './DescriptionBox';
import ReadOnlyAmountBox from './ReadOnlyAmountBox';
import { SendConsumer } from './SendContext';

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
                    const { modalOpen, toggleModal, updateBalance, setToAddress } = value;
                    const { sufficientBalance, selectedItem, amount, convertedVal, toAddress, description } = value.send;
                    const { name } = value.send.selectedItem;
                    const words = sufficientBalance ? "" : "Insufficient Funds";
                    const flow = "red";
                    const type = "send";
                    var obj = {
                        selectedItem: selectedItem, amount: amount, convertedValue: convertedVal, toAddress: toAddress, description: description, flow: flow, type: type
                    }

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

                                            <div style={{ cursor: "pointer" }} onClick={() => {
                                                toggleModal();
                                                value.setSufficientBalance(true);
                                                value.resetAmountBox();
                                            }}>
                                                <i className="far fa-window-close fa-lg"></i>
                                            </div>
                                        </div>

                                        <div className="modal-body">
                                            <div className="currency-from">

                                                <div id="currency">
                                                    <span style={{ fontSize: "1rem", float: "left" }} >Currency</span>
                                                    <SelectBox
                                                        value={value}
                                                    />
                                                </div>

                                                <div id="from">
                                                    <span style={{ fontSize: "1rem" }}>From</span>
                                                    <FromBox
                                                        value={value}
                                                    />
                                                </div>
                                            </div>

                                            <div id="to">
                                                <div><span>To</span></div>
                                                <ToBox setToAddress={setToAddress} />
                                            </div>

                                            <div className="usd-btc">
                                                <div>
                                                    <span >Amount</span>
                                                    <span style={{ position: "relative", float: "right", color: "red", fontSize: "12px" }}>{words}</span>
                                                </div>
                                                <div className="usd-btc-inner">
                                                    <AmountBox currency="BTC" placeholder="$0.00" />
                                                    <span id="equals">=</span>
                                                    <ReadOnlyAmountBox placeholder="0"
                                                        value={value}
                                                        style={{ float: "right" }} />
                                                </div>
                                            </div>


                                            <div className="description">
                                                <div><span >Description</span></div>
                                                <DescriptionBox setDescription={value.setDescription} placeholder="What's the transaction for? (optional)" />
                                            </div>
                                            <div className="send-button">
                                                <ButtonContainer style={{ height: "40px" }}
                                                    onClick={() => {
                                                        if (sufficientBalance) {
                                                            value.addTransaction(obj);
                                                            updateBalance(convertedVal, false, name);
                                                            toggleModal();
                                                        }
                                                    }}
                                                >Send </ButtonContainer>
                                            </div>

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

