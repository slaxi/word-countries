import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components'
import { Title } from './styled'
import HomePage from './components/home/HomePage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title>World Countries</Title>
      <div className="card">
        <HomePage />
      </div>
    </>
  )
}

export default App
