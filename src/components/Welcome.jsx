import React from "react"
import "./components.css";
import todoImage from "../assets/delegation.png"
class Welcome extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <div className="welcome-container">
                <div className="auth-place">
                    {this.props.children}
                </div>
                <div className="pic-place">
                    <img className="image" src={todoImage} ></img>
                </div>
            </div>
            </>
        )
    }
}

export default Welcome