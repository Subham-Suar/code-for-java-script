import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)



  const addvalue=()=>{
    console.log("clicked",counter)
    counter=counter+1
    setCount(counter)
  }

  return (
    <>
      <h1> chai aur react</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addvalue}>add value</button><br></br>
        <button>remove value</button>
      
    </>
  )
}

export default App
