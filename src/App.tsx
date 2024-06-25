
import React from 'react'
import './App.css'

const Landing = React.lazy(()=> import('./pages/Landing'));

function App() {

  return (
    <>
      <Landing/>
    </>
  )
}

export default App
