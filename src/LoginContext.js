import React, { Component } from 'react';
import { users } from './logindata';

const LoginContext = React.createContext();

export default class LoginProvider extends Component {
    state = {
        loggedIn: false,
        users: [],
        isAdmin: false,
        triedToLogin: false
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
        if(localStorage.getItem("isAdmin") !== null) {
            this.setState(() => {
                return {
                    isAdmin: JSON.parse(localStorage.getItem("isAdmin"))
                }
            })
        }
    }

    checkValidCredentials = (obj) => {
        const { username: un, password: pw } = obj;
        var found = false
        this.state.users.forEach(user => {
            const { username, password, isAdmin } = user;
            if (un === username && pw === password) {
                found = true;

                if(isAdmin) {
                    this.setState(() => {
                        return {
                            isAdmin: true
                        }
                    }, localStorage.setItem("isAdmin", JSON.stringify(true)))
                }
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
                return {
                    loggedIn: false
                }
            }, () => {
                localStorage.setItem("loggedIn", false)
            })
        }

        this.setState(() => {
            return {
                triedToLogin: true
            }
        })

    }

    setLoggedIn = (loggedIn) => {
        this.setState(value => {
            return {
                loggedIn: loggedIn,
                triedToLogin: false,
            }
        }, () => {
            localStorage.setItem("loggedIn", JSON.stringify(this.state.loggedIn));
        })
    }

    logout = () => {
        this.setState(value => {
            return {
                loggedIn: false,
                triedToLogin: false,
                isAdmin: false
            }
        }, () => {
            localStorage.setItem("loggedIn", JSON.stringify(false));
            localStorage.setItem("isAdmin", JSON.stringify(false));
        })
    }
    render() {
        return (
            <LoginContext.Provider value={{
                ...this.state,
                setLoggedIn: this.setLoggedIn,
                checkValidCredentials: this.checkValidCredentials,
                logout: this.logout
            }}>
                {this.props.children}
            </LoginContext.Provider>
        );
    }
}

const LoginConsumer = LoginContext.Consumer;

export { LoginConsumer, LoginProvider };