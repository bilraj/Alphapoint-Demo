import React, { Component } from 'react';
import './styles.css';
import { SendConsumer } from '../../store/Wallet/SendModal/SendContext';
import { WalletConsumer } from '../../WalletContext';
export default class SelectBox extends Component {
    state = {
        items: [],
        showItems: false,
        selectedItem: {}
    }

    componentDidMount() {
        this.setState(() => {
            return {
                items: this.props.value.balances || [],
                showItems: false,
                selectedItem: this.props.value.balances[0]
            }
        }, () => {
            this.props.value.setSelectedItem(this.state.selectedItem);
        })
    }

    render() {
        return (
            <div className="container">
                <div className="select-box" onClick={this.dropDown}>
                    <div className="row">
                        <div className="col-3">
                            <span><i className={`${this.state.selectedItem.logo}`}></i></span>
                        </div>
                        <div className="col-6">
                            <span>{this.state.selectedItem.name}</span>

                        </div>
                        <div className="col-3">
                            <span style={{ float: "right", marginRight: "1rem" }}><i style={{ right: "0" }} className="fas fa-chevron-down"></i></span>
                        </div>
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
                                        this.props.value.setSelectedItem(item)
                                        this.props.value.resetAmountBox()
                                    }}
                                    className={this.state.selectedItem === item ? "item selected" : "item"}>
                                    <div className="row">
                                        <div className="col-3">
                                            <span><i className={`${item.logo}`}> </i></span>
                                        </div>
                                        <div className="col-6">
                                            {item.name}
                                        </div>

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