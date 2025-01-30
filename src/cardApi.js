
// dealing with Promise object
export async function queryForData() {
  try {
    const cardDeck = await retrieveCards();
    return cardDeck;

  } catch(error) {
    console.log(error);
  }

}

// return Promise object
export async function retrieveCards() {

  const apiData = 'https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,AD,AC,AH,JS,JD,JC,JH,QS,QD,QC,QH,KS,KD,KC,KH';

  try {
    const data = await fetch(apiData, { mode: 'cors' });
    if(!data.ok) {
      throw new Error('Response status: ${data.status}');
    }
    const cardData = await data.json();
    const cardDraw = await drawShuffledCards(cardData.deck_id);
    return cardDraw;
  } catch (error) {
    console.log(error);
  }
};

export async function drawShuffledCards(deckID) {

  const apiData = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=16`

  try {
    const data = await fetch(apiData, { mode: 'cors' });
    if(!data.ok) {
      throw new Error('Response status: ${data.status}');
    }
    const cardData = await data.json();
    return cardData;
  } catch (error) {
    console.log(error);
  }
};

