import { useState, useEffect } from 'react'
import { queryForData } from './cardApi';
import './styles/App.css'
import { CardGrid } from './components/mainComponents';

function App() {
  const [deck, setDeck] = useState(null);

  const [cards, setCard] = useState();

  //for game reset (win or lose)
  useEffect(() => {
    let ignore = false;
    queryForData().then(data => {
      if(!(ignore)) {
        setDeck(data);
      }
    });
    return () => {
      console.log("Cleanup")
      ignore = true;
    };
  }, [])  //perhaps use a dependency here to change deck upon win or lose

  //placeholder conditional
  if (deck !== null) {
    console.log(deck);
    return (
      <>
        <CardGrid deck={deck.cards} deckID={deck.deck_id} />
      </>
    )
  }
}

export default App
