import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './Data'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={count:1, text:"", flag:false}
    this.dataHandler = this.dataHandler.bind(this);
  }
  increment=()=>{
    console.log("counted")
    this.setState({count:this.state.count+1})
  }
  dataHandler(){
    this.setState((prevState)=>{
      const newFlag=!prevState.flag
      const newText=newFlag ? "Class Component" : "Functional Component"

      return {flag:newFlag,
              text:newText
      }
    })
  }
  render(){
    return (<>
      <h1>Hello world {this.state.count}</h1>
      <button onClick={()=>this.increment()}> increment</button>
      <button onClick={()=>this.dataHandler()}>Set Data</button>
      <Data data={this.state.text} />
    </>

    )
  }
}

export default App
