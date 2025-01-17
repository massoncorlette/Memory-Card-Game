
// dealing with Promise object
export async function queryForData(cardAmount) {
  try {
    const cardDeck = await retrieveCards();
    console.log(cardDeck);

  } catch(error) {
    console.log(error);
  }



}

// return Promise object
export async function retrieveCards() {

  const apiData = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

  try {
    const data = await fetch(apiData, { mode: 'cors' });
    if(!data.ok) {
      throw new Error('Response status: ${data.status}');
    }
    const cardData = await data.json();
    console.log(cardData);
  } catch (error) {
    console.log(error);
  }
};