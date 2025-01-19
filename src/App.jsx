import { useState, useEffect } from 'react'
import { queryForData, shuffleCards } from './cardApi';
import './styles/App.css'

function App() {
  const [cards, setCards] = useState();

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
  }, [])  //perhaps use a dependency here to change deck upon win or lose

  //for after every turn (shuffling cards api call)
  useEffect(() => {
    let ignore = false;
    shuffleCards(cards.deck_id).then(data => {
      if(!ignore) {
        setCards(data);
      }
    });
    return () => {
      ignore = true;
    };
  },[cards.deck_id,clickedCards]);
 
  console.log(cards);

  return (
    <>
    </>
  )
}

export default App
