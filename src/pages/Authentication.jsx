import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import { middleware } from 'stylus'

class Authentication extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            login: true
        }

    }
    onSignup = (newUser) => {
        this.setState((prevState) => {
            users: [...prevState.users, newUser]
        })
    }
    render() {

        return <>
            {
                this.state.login ? (<Login
                    loginState={this.state.login}
                    users={this.state.users} />)
                    :
                    (<Signup
                        onSignup={this.onSignup}
                    />)
            }

        </>
    }
}
export default Authentication


// components
// - /Form - formFields, callback

// pages
// - Login
// - Signup

// middleware
// - Authentication