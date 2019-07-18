import React, { Component } from 'react';
import Menu from './Menu';
import Top from './Top';

export default class BuySell extends Component {
  render() {
    return (
      <React.Fragment>
        <div  className="d-flex align-items-flex-start ">
          <Menu />
          <Top />
        </div>

        <div>Hello from buy sell</div>

      </React.Fragment>
    );
  }
}
