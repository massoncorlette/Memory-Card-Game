import { useState, useEffect } from 'react'
import { queryForData } from './cardApi';
import './styles/App.css'
import { CardGrid, HeadingCounter } from './components/mainComponents';

function App() {
  const [deck, setDeck] = useState(null);

  const [cards, setCard] = useState([]);

  const [userScores, setScore] = useState({currentScore:0, highScore:0});

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

    if (!checkCards(card)) {
      console.log("Card was NOT Found")

      cards.map((storedCard) => {
        updatedCards.push(storedCard);
      });
      handleIncreaseCurrentScore(userScores.currentScore + 1);
      updatedCards.push(card);
      setCard(updatedCards);
      console.log(userScores.currentScore);
      console.log(userScores.highScore);

    } else {
      console.log("Card was Found")
      setCard([]);
      handleIncreaseCurrentScore(0);
    }
  }

  const handleIncreaseCurrentScore = (value) => {
    const newScore = {...userScores, currentScore:value}

    setScore(newScore);
  }

  const handleIncreaseHighScore = (newScore) => {

    const newHighSchoolScore = {...userScores, highScore:newScore};
    
    setScore(newHighSchoolScore);
  };

  // calculates after render, if highscore is more re renders
  if (userScores.currentScore > userScores.highScore) {
    handleIncreaseHighScore(userScores.currentScore);
  }


  function checkCards(card) {

    for (let i = 0; cards.length > i; i++) {
      if (card.code === cards[i].code) {
        return true;
    }
  };
  return false;
};

  //placeholder conditional
  if (deck !== null) {
    console.log(deck);
    return (
      <> 
        <HeadingCounter currentscore={userScores.currentScore} highscore={userScores.highScore}/>
        <CardGrid deck={deck.cards} deckID={deck.deck_id} selectedCards={cards} updateCards={updateCards} />
      </>
    )
  }
}

export default App
