
export function CardGrid(cards) {


  return (
    <div id='cardGrid'>
      <div id='gridTop'>
        <CardCell cardImage={cards[0].image}></CardCell>
        <CardCell></CardCell>
        <CardCell></CardCell>
        <CardCell></CardCell>
        <CardCell></CardCell>
        <CardCell></CardCell>
        <CardCell></CardCell>
        <CardCell></CardCell>
      </div>
      <div id='gridBottom'>
        <CardCell></CardCell>
        <CardCell></CardCell>
        <CardCell></CardCell>
        <CardCell></CardCell>
        <CardCell></CardCell>
        <CardCell></CardCell>
        <CardCell></CardCell>
        <CardCell></CardCell>
      </div>
    </div>
  )
};


function CardCell(cardImage) {

  console.log(cardImage);

  return (
    <div className="cardCell">
      <div className="cardContainer">
        <button id="cardButton">
          <img className="cardImage" src={cardImage}></img>
        </button>
      </div>
    </div>
  )
};