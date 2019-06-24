import React, { Component } from 'react';
import Logo from './Logo';
import { ButtonContainer } from '../store/Button';
import { LoginConsumer } from '../LoginContext';

export default class LoginFields extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        event.persist();
        this.setState(() => {
            return {
                [event.target.name]: event.target.value
            }
        })
    }

    handleClick(value) {
        const obj = {
            username: this.state.username,
            password: this.state.password
        }

        // Check if valid
        value.checkValidCredentials(obj)

    }

    render() {
        return (
            <LoginConsumer>
                {(value) => {
                    var invalid = value.triedToLogin && !value.loggedIn;
                    var display = invalid ? "Invalid Credentials" : ""
                    return (

                        <div className="login-container">
                            <div id="logo">
                                <Logo />
                                <span><h3 id="welcome">Log in to your account.</h3></span>
                            </div>
                            <div className="login-fields">
                                <div className="username">
                                    <span id="un">Username:</span> <br /> <span ><input type="text" onChange={this.handleChange} name="username" className="login-input" placeholder="Username" /></span>
                                </div>
                                <div className="password">
                                    <span id="pw">Password:</span> <br /><span><input className="login-input" onChange={this.handleChange} name="password" type="password" placeholder="Password" /></span>
                                </div>
                            </div>

                            <div className="login-button-container">
                                <form onSubmit={() => this.handleClick(value)}>
                                    <span><ButtonContainer id="login-button">Login</ButtonContainer></span>
                                </form>
                            </div>
                            <div className="invalid-credentials-container">
                                <span id="invalid-credentials">{display}</span>
                            </div>
                        </div>
                    )
                }}
            </LoginConsumer>


        );
    }
}
