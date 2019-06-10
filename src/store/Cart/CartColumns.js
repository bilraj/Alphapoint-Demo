import React, { Component } from 'react';

export default class CartColumns extends Component {
    render() {
        return (
            <div className="container-fluid text-center d-none d-lg-block">
                <div className="row">
                    <div className="col-10 mx-auto col-lg-2">
                        <strong><p className="text-uppercase">products</p></strong>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <strong><p className="text-uppercase">name of product</p></strong>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <strong><p className="text-uppercase">price</p></strong>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <strong><p className="text-uppercase">quantity</p></strong>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <strong><p className="text-uppercase">remove</p></strong>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <strong><p className="text-uppercase">total</p></strong>
                    </div>
                </div>
            </div>
        );
    }
}
