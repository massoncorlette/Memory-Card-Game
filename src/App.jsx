import { useState, useEffect } from 'react'
import { queryForData } from './cardApi';
import './styles/App.css'
import { CardGrid } from './components/mainComponents';

function App() {
  const [deck, setDeck] = useState(null);

  const [cards, setCard] = useState([]);

  //for game reset (win or lose)
  useEffect(() => {
    let ignore = false;
    queryForData().then(data => {
      if(!(ignore)) {
        //timeout function here passing 
        setDeck(data);
      }
    });
    return () => {
      console.log("Cleanup")
      ignore = true;
    };
  }, [cards]) 
  
  const updateCards = (card) => {
    let updatedCards = [];
    cards.map((storedCard) => {
      updatedCards.push(storedCard);
    });
    updatedCards.push(card);
    setCard(updatedCards);
  }

  //placeholder conditional
  if (deck !== null) {
    console.log(deck);
    return (
      <>
        <CardGrid deck={deck.cards} deckID={deck.deck_id} selectedCards={cards} updateCards={updateCards} />
      </>
    )
  }
}

export default App
