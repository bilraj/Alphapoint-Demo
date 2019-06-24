import React, { Component } from 'react';
import './styles.css';
import WalletConsumer from '../../../WalletContext';

export default class FromBox extends Component {
    state = {
        items: this.props.items || [],
        showItems: false,
        selectedItem: this.props.items[0]
    }

    render() {
        // alert("JSJAJL " + JSON.stringify(this.props))

        const { balances } = this.props;
        const adjusted = parseFloat((balances[0].balance * 1).toFixed(2));


        return (
            <div className="container">
                <div className="from-box" onClick={this.dropDown}>
                    <div id="wallet-box">
                        <span>{this.state.selectedItem.value}</span>
                        ({adjusted} {this.state.selectedItem.sym})
                    </div>
                    <div id="down-icon">
                        <span><i className="fas fa-chevron-down"></i></span>
                    </div>
                </div>
                <div style={{ display: this.state.showItems ? "block" : "none" }} className="items">
                    {
                        this.state.items.map(item => {
                            return (
                                <div
                                    key={item.id}
                                    onClick={() => {
                                        this.selectItem(item);
                                    }
                                    }

                                    className={this.state.selectedItem === item ? "item selected" : "item"}>
                                    <div className="row-thing">
                                        {item.value} ({adjusted} {item.sym})
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>

        )
    }

    selectItem = (item) => {
        this.setState(() => {
            return {
                selectedItem: item,
                showItems: false
            }
        })
    }


    dropDown = () => {
        this.setState((prevState) => {
            return {
                showItems: !prevState.showItems
            }
        });
    }
}