
export function CardGrid(cards) {


  return (
    <div id='cardGrid'>
      <div id='gridTop'>
        <CardCell cardImage={cards}></CardCell>


      </div>
      <div id='gridBottom'>

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
        </button>
      </div>
    </div>
  )
};