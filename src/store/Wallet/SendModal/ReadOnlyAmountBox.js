import React, { Component } from 'react';
import { SendConsumer } from './SendContext';
import { TokenConsumer } from '../../../TokenContext';

export default class ReadOnlyAmountBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            placeholder: props.placeholder,
            currency: props.currency,
        }
    }

    componentWillUnmount = () => {
        this.setState(() => {
            return {
                value: ''
            }

        })
    }

    handleChange = (event) => {
        event.persist();
        return (
            this.setState(() => {
                return {
                    value: event.target.value
                }
            })
        )
    }
    render() {
        return (
            <SendConsumer>
                {(value) => {
                    const { convertedValue, sufficientBalance } = value;
                    return (
                        <TokenConsumer>
                            {(val) => {
                                const { haveToken } = val;
                                var currency = haveToken ? val.token.symbol : "BTC";
                                return (
                                    <div className="amount-box" style={{ borderColor: sufficientBalance ? "" : "red" }}>
                                        <input id="subdomain" type="text" onChange={this.handleChange} value={convertedValue} placeholder={this.state.placeholder}
                                            value={convertedValue}
                                            readOnly />
                                        <input type="text" id="subdomaintwo" value={currency} disabled />
                                    </div>
                                )
                            }}
                        </TokenConsumer>
                    )


                }}
            </SendConsumer>




        );
    }
}
