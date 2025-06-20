import React from 'react'

class Signup extends React.Component{
    constructor(props){
        super(props)
        this.name=React.createRef()
        this.email=React.createRef()
        this.password=React.createRef()
        this.handler=this.handler.bind(this)
    }
    handler=()=>{
        const obj={
            name:this.name.current.value,
            email:this.email.current.value,
            password:this.password.current.value
        }
        this.props.onSignup(obj)
    }
    render(){
        const formFields=[
            {name:"user-name", label:"Name", type:"text",placeholder:"Enter your name", ref:this.name},
            {name:"user-email", label:"Email", type:"email",placeholder:"Enter your email", ref:this.email},
            {name:"user-password", label:"Password", type:"password",placeholder:"Enter your password", ref:this.password},
        ]
        return<>
        <h1>Sign up</h1>
        {
            formFields.map(({name, label, type, placeholder, ref}, index)=>(
                <div key={index}>
                    <input
                    name={name}
                    label={label}
                    type={type}
                    placeholder={placeholder}
                    ref={ref}
                    >
                    </input>
                </div>
            ))
        }
        <button onClick={()=>this.handler()}>Sign Up</button>
        </>
    }
}

export default Signup