import { useState } from 'react'
import { queryForData } from './cardApi';
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <queryForData/>
    </>
  )
}

export default App
