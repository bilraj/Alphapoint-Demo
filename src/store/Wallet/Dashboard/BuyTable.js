import React, { Component } from 'react';
import './styles.css'

export default class BuyTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, symbol } = this.props.value.token;
        return (
            <div className="buy-container">
                <div className="table-words">
                    <span>Purchase {name}</span>
                    <hr style={{width: "85%"}}></hr>
                </div>

                <div className="buy-row">
                    <span className="buy-words">Amount ({symbol}) </span> <br></br>
                    <span><input className="buy-input" type="text"></input></span>
                </div>
                <div className="buy-row">
                    <span className="buy-words">Price (USD)</span>
                </div>

                <hr style={{width: "85%"}}></hr>
                <div className="buy-row">
                    <span className="buy-words">Asking Price (USD)</span>
                </div>
            </div>
        );
    }
}
