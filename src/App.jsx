import { useState, useEffect } from 'react'
import { queryForData } from './cardApi';
import './styles/App.css'

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let ignore = false;
    queryForData().then(data => {
      if(!ignore) {
        console.log(data);
      }
    });
    return () => {
      ignore = true;
    };
  }, [])


  return (
    <>
    </>
  )
}

export default App
