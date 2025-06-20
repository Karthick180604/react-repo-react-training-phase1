import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './Data'
import Authentication from './pages/Authentication'

class App extends React.Component{
  
  render(){
    return (<>
     <Authentication />
    </>

    )
  }
}

export default App
