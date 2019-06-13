import React, { Component } from 'react';
import Menu from './Menu';

export default class BuySell extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container d-flex ">
          <Menu />
          <div> Hello from Buy Sell </div>
        </div>


      </React.Fragment>
    );
  }
}
