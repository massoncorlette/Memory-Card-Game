import { useState,useEffect } from "react";
import pokerLogo from '../assets/poker-cards.png';


export function HeadingCounter({currentscore,highscore,displaymessage}) {


  return (
    <div id='headingCounterContainer'>
      <div id='headingContainer'>
        <div id='headingTxt'>
          Memory Deck Game
        </div>
        <div id='logoContainer'>
          <img src={pokerLogo} id='pokerLogo'></img>
        </div>
      </div>

      <div id='counterContainer'>
        <div id='displaymessage'>
          <p>{displaymessage}</p>
        </div>
        <div className="scoresContainer">
          <p>Current Score: </p>
          <div className="scoreTxt">{currentscore}</div>
        </div>
        <div className="scoresContainer">
          <p>High Score: </p>
          <div className="scoreTxt">{highscore}</div>
        </div>
      </div>

    </div>
  )

}

export function CardGrid({deck,deckID,selectedCards,updateCards}) {

  console.log(deck);
  console.log(deckID);

  return (
    <div id='cardGrid'>
      <div id='gridTop'>
       {deck.slice(0,8).map((card) => {
        return <CardCell key={card.code} card={card} cardImage={card.image} selectedCards={selectedCards} updateCards={updateCards}></CardCell>
       })}
      </div>
      <div id='gridBottom'>
       {deck.slice(8,16).map((card) => {
        return <CardCell key={card.code} card={card} cardImage={card.image} selectedCards={selectedCards} updateCards={updateCards}></CardCell>
       })}
      </div>
    </div>
  )
};



function CardCell({card,cardImage,selectedCards,updateCards}) {

  const [currentImage, setCurrentImage] = useState("https://deckofcardsapi.com/static/img/back.png");

  useEffect(() => {
    if (card !== null) {
      setCurrentImage("https://deckofcardsapi.com/static/img/back.png"); 

      const timeout = setTimeout(() => {
        setCurrentImage(cardImage); 
      }, 2000);

      return () => clearTimeout(timeout); 
    }
  }, [card, cardImage]);

  if (card !== null) {
    return (
      <div className="cardContainer">
        <button className="cardButton" onClick={() => {
          updateCards(card);
        }}>
          <img className='cardImage' src={currentImage} />
        </button>
      </div>
    
    )
  }

};