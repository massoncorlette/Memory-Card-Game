import { useState, useEffect } from 'react'
import { queryForData } from './cardApi';
import './styles/App.css'
import { CardGrid } from './components/mainComponents';

function App() {
  const [deck, setCards] = useState(null);

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


  if (deck !== null) {
    console.log(deck);
  }

  //placeholder conditional
  if (deck !== null) {
    return (
      <>
        <CardGrid cards={deck.cards}/>
      </>
    )
  }

}

export default App
