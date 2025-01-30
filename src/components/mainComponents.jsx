
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

  if (card !== null) {
    return (
      <div className="cardContainer">
        <button className="cardButton" onClick={() => {
          updateCards(card);
        }}>
          <img className='cardImage' src={cardImage} />
        </button>
      </div>
    
    )
  }

};