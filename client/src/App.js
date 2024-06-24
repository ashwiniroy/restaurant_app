import React from 'react'
import Home from "./Routes/Home"

import {Routes,Route} from "react-router-dom"
const App = () => {
  return (
    <div className='container' >
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App