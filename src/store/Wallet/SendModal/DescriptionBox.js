import React, { Component } from 'react';
import { SendConsumer } from './SendContext';

export default class DescriptionBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            placeholder: this.props.placeholder
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
                    <textarea onChange={this.handleChange} onBlur={() => this.props.setDescription(this.state.value)} value={this.state.value} style={{resize:"none"}} className="desc-box" type="text" value={this.state.value} placeholder={this.props.placeholder}> </textarea> 
                )
            }}
        </SendConsumer>
    );
  }
}
