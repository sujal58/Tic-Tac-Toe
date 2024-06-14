import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import Gamaepage from './pages/Gamepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Landing/> */}
      <Gamaepage/>
    </>
  )
}

export default App
