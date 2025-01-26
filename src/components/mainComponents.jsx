
export function CardGrid({deck,deckID}) {

  console.log(deck);
  console.log(deckID);

  return (
    <div id='cardGrid'>
      <div id='gridTop'>
        <CardCell cardImage={deck[0].image}></CardCell>
        <CardCell cardImage={deck[1].image}></CardCell>
        <CardCell cardImage={deck[2].image}></CardCell>
        <CardCell cardImage={deck[3].image}></CardCell>

      </div>
      <div id='gridBottom'>

      </div>
    </div>
  )
};


function CardCell({cardImage}) {

  console.log(cardImage);

  return (
    <div className="cardCell">
      <div className="cardContainer">
        <button className="cardButton">
          <img className='cardImage' src={cardImage} />
        </button>
      </div>
    </div>
  )
};