import { useState, useEffect } from 'react'
import { queryForData, shuffleCards } from './cardApi';
import './styles/App.css'
import { CardGrid } from './components/mainComponents';

function App() {
  const [cards, setCards] = useState(null);

  const [clickedCards, saveCard] = useState();

  //for game reset (win or lose)
  useEffect(() => {
    let ignore = false;
    queryForData().then(data => {
      if(!ignore) {
        setCards(data);
      }
    });
    return () => {
      ignore = true;
    };
  }, [clickedCards])  //perhaps use a dependency here to change deck upon win or lose


 
  if (cards !== null) {
    console.log(cards);
  }

  return (
    <>
      <CardGrid/>
    </>
  )
}

export default App
