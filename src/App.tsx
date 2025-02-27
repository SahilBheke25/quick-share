import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginContainer from './features/Login/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Quick Share</h1>
      <LoginContainer/>
    </>
  )
}

export default App
