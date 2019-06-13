import React, { Component } from 'react';
import Menu from './Menu';

export default class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
      <Menu />
      <div> Hello from Dashboard </div>
      </React.Fragment>

    );
  }
}
