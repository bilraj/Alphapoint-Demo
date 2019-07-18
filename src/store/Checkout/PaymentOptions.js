import React, { useState } from 'react';

const PaymentOptions = (props) => {
    const paymentOptions = props.paymentOptions;
    const { setPayWithToken } = props;

    const [selectedItem, setSelectedItem] = useState(paymentOptions[0]);
    const [optionsOpen, setOptionsOpen] = useState(false);

    return (

        <div id="payment-dropdown-container">
            <div className="noselect" onClick={() => setOptionsOpen(!optionsOpen)} id="dropdown-header">
                <div id="selected-item">{selectedItem.name}</div>
            </div>
            <div id="dropdown-body-container">
                <div id="dropdown-body" className="noselect" style={{ display: optionsOpen ? "block" : "none" }}>
                    {
                        paymentOptions.map(item => {
                            return (
                                <div className="payment-item" onClick={() => {
                                    setSelectedItem(item);
                                    setOptionsOpen(false);

                                    if (item.hasToken) {
                                        setPayWithToken(true);
                                    } else {
                                        setPayWithToken(false);
                                    }
                                }
                                }>
                                    {item.name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>

    )
}

export default PaymentOptions;