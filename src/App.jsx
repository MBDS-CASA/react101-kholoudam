import { useState } from 'react'
import Emsi from './assets/logo_emsi.png'
import UCA from './assets/LOGO_UCA.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={Emsi} className="logo Emsi" alt="Emsi" />
          <img src={UCA} className="logo UCA" alt="UCA" />
      </div>
      <h1>Introduction à React</h1>
      <h4>A la découverte des premières notion de React</h4>
    </>
  )
}

export default App
