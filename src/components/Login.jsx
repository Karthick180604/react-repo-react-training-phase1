import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const formFields = [
            { name: "user-email", label: "Email", type: "email", placeholder: "Enter your email" },
            { name: "user-password", label: "Password", type: "password", placeholder: "Enter your password" }
        ]
        const { loginState, users } = this.props
        return <>
            <h1>Login</h1>
            {
                formFields.map(({ name, label, type, placeholder }, index) => (
                    <div key={index}>
                        <input
                            name={name}
                            label={label}
                            type={type}
                            placeholder={placeholder}
                        >
                        </input>
                    </div>
                ))
            }
            <button>Login</button>
        </>
    }
}

export default Login