
export function CardGrid({deck,deckID,selectedCards,updateCards}) {

  console.log(deck);
  console.log(deckID);

  return (
    <div id='cardGrid'>
      <div id='gridTop'>
       {deck.slice(0,8).map((card) => {
        return <CardCell key={card.code} cardImage={card.image}></CardCell>
       })}
      </div>
      <div id='gridBottom'>
       {deck.slice(8,16).map((card) => {
        return <CardCell key={card.code} cardImage={card.image}></CardCell>
       })}
      </div>
    </div>
  )
};


function CardCell({cardImage}) {

  console.log(cardImage);

  return (
    <div className="cardContainer">
      <button className="cardButton">
        <img className='cardImage' src={cardImage} />
      </button>
    </div>
  
  )
};