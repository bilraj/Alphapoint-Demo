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
        const { convertedVal, sufficientBalance } = this.props.value.send;
        const { sym } = this.props.value.send.selectedItem;

        return (
            <TokenConsumer>
                {(val) => {
                    const { haveToken } = val;
                    var currency = haveToken ? val.token.symbol : "BTC";
                    return (
                        <div className="amount-box" style={{ borderColor: sufficientBalance ? "" : "red" }}>
                            <input id="subdomain" type="text" onChange={this.handleChange} value={convertedVal} placeholder={this.state.placeholder}
                                readOnly />
                            <input type="text" id="subdomaintwo" value={sym} disabled />
                        </div>
                    )
                }}
            </TokenConsumer>
        )





    }
}
