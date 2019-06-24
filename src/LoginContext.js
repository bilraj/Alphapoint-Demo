import React, { Component } from 'react';
import { users } from './logindata';

const LoginContext = React.createContext();

export default class LoginProvider extends Component {
    state = {
        loggedIn: false,
        users: []
    }

    componentDidMount() {
        if (localStorage.getItem("users") !== null) {
            console.log("Found users")
            this.setState(() => {
                return {
                    users: JSON.parse(localStorage.getItem("users"))
                }
            })
        }
        else {
            console.log("Adding users")
            let tempUser = []
            // Get users
            users.forEach(user => {
                const singleUser = { ...user };
                tempUser = [...tempUser, singleUser];
            });
            console.log("TEMO : " + JSON.stringify(tempUser))

            this.setState(() => {
                return {
                    users: tempUser
                }
            }, () => localStorage.setItem("users", JSON.stringify(this.state.users)))
        }

        if (localStorage.getItem("loggedIn") !== null) {
            this.setState(() => {
                return {
                    loggedIn: JSON.parse(localStorage.getItem("loggedIn"))
                }
            })
        }
    }

    checkValidCredentials = (obj) => {
        const { username: un, password: pw } = obj;
        console.log(JSON.stringify("USERL: " + this.state.users))
        var found = false
        this.state.users.forEach(user => {
            const { username, password } = user;
            if (un === username && pw === password) {
                found = true;
            }
        })

        if (found) {
            this.setState(() => {
                console.log("TRUUUEEE")
                return {
                    loggedIn: true
                }
            }, () => {
                localStorage.setItem("loggedIn", true);
            })
        } else {
            this.setState(() => {
                console.log("FALLLSSSSEE")
                return {
                    loggedIn: false
                }
            }, () => {
                localStorage.setItem("loggedIn", false)
            })
        }


    }

    setLoggedIn = (loggedIn) => {
        this.setState(value => {
            return {
                loggedIn: loggedIn
            }
        }, () => {
            localStorage.setItem("loggedIn", JSON.stringify(this.state.loggedIn));
        })
    }

    render() {
        return (
            <LoginContext.Provider value={{
                ...this.state,
                setLoggedIn: this.setLoggedIn,
                checkValidCredentials: this.checkValidCredentials
            }}>
                {this.props.children}
            </LoginContext.Provider>
        );
    }
}

const LoginConsumer = LoginContext.Consumer;

export { LoginConsumer, LoginProvider };