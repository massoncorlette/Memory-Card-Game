
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
        <CardCell cardImage={deck[4].image}></CardCell>
        <CardCell cardImage={deck[5].image}></CardCell>
        <CardCell cardImage={deck[6].image}></CardCell>
        <CardCell cardImage={deck[7].image}></CardCell>
      </div>
      <div id='gridBottom'>
        <CardCell cardImage={deck[8].image}></CardCell>
        <CardCell cardImage={deck[9].image}></CardCell>
        <CardCell cardImage={deck[10].image}></CardCell>
        <CardCell cardImage={deck[11].image}></CardCell>
        <CardCell cardImage={deck[12].image}></CardCell>
        <CardCell cardImage={deck[13].image}></CardCell>
        <CardCell cardImage={deck[14].image}></CardCell>
        <CardCell cardImage={deck[15].image}></CardCell>
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