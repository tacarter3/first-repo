import React from 'react'
import { useState } from 'react'

function App(){
  let [ counter, changeCounter ] = useState(1)
  window.changeCounter = changeCounter
  
  return (
    <div>
      <h1>{counter}</h1>
      <h1>{counter}</h1>
      <button onClick={() => changeCounter(Math.floor(Math.random() * 100))}>Click me</button>
    </div>
  )
}

export default App