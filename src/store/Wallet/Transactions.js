import React, { Component } from 'react';
import Menu from './Menu';
import Top from './Top';

export default class Transactions extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-contents-flex-start" sytle={{width:"fit-content", height:"fit-content"}}>
          <Menu style={{position:"absolute", top:"80px", borderColor:"green"}}/>
          <Top />
        </div>

        <div style={{border: "13px solid black"}}> Hello from Transactions </div>
      </React.Fragment>

    );
  }
}
