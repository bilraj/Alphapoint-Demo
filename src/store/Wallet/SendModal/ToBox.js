import React, { Component } from 'react';
import { SendConsumer } from './SendContext';

export default class ToBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
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
                    return (
                        <input className="to-box" onChange={this.handleChange} onBlur={() => value.setToAddress(this.state.value)} value={this.state.value} type="text" placeholder="Paste, scan, or select destination" />
                    )
                }}
            </SendConsumer>
        );
    }
}
