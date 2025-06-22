import React, { createRef } from 'react'
import "./components.css"
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.email=createRef()
        this.password=createRef()
        this.loginHanlder=this.loginHandler.bind(this)
    }
    loginHandler=(e)=>{
        e.preventDefault()
        const loginObj={
            email:this.email.current.value,
            password:this.password.current.value
        }
        this.props.onLogin(loginObj)
        this.email.current.value=""
        this.password.current.value=""
    }
    signUpRequest=(e)=>{
        e.preventDefault()
        console.log("executing")
        this.props.loginOrSignup()
    }
    render() {
        const formFields = [
            { name: "user-email", label: "Email", type: "email", placeholder: "Enter your email", ref:this.email},
            { name: "user-password", label: "Password", type: "password", placeholder: "Enter your password", ref:this.password}
        ]
        return <>
            <div className='auth-container'>
                <div className='auth-text-container'>
                    <h1 className='auth-text'>Login</h1>
                </div>
                <div className="auth-form-container">

                    <form className='auth-form' onSubmit={this.loginHandler}>
                        {
                            formFields.map(({ name, label, type, placeholder,ref }, index) => (
                                <div key={index}>
                                    <input
                                        name={name}
                                        label={label}
                                        type={type}
                                        placeholder={placeholder}
                                        ref={ref}
                                        className='auth-input'
                                    >
                                    </input>
                                </div>
                            ))
                        }

                    <button className='auth-button' type='submit'>Login</button>
                    <button className='auth-button' onClick={this.signUpRequest}>Sign up</button>
                    </form>
                </div>

            </div>
        </>
    }
}

export default Login