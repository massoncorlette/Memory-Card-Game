import { useState, useEffect } from 'react'
import { queryForData } from './cardApi';
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    queryForData();
  }, [])


  return (
    <>
    </>
  )
}

export default App
