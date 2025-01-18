import { useState, useEffect } from 'react'
import { queryForData } from './cardApi';
import './styles/App.css'

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let ignore = false;
    queryForData().then(data => {
      if(!ignore) {
        setCards(data.cards);
      }
    });
    return () => {
      ignore = true;
    };
  }, [])  //perhaps use a dependency here to change deck upon win or lose

  console.log(cards);


  return (
    <>
    </>
  )
}

export default App
