# React + Vite

https://deckofcardsapi.com/

 
 1. Unmount and Strictmode render happens from DOMload in 
 2. Since deck is null, both initial renders do not pass deck prop
 3. Strictmode unmount will do the cleanup up 
 4. Strictmode remounts for re render
 5. First API returns with data for a re render from 6. useEffect(flag is set and is not set by setCards)
 7. Second API returns, flag did not set so setState saves cards to deck

 



App()
	will save state for deck obj(id and cards). 
	will save state for clicked cards, saveCards should be able to pass as a prop to add to clicked cards array. Perhaps we can add a flag to pass as a prop, and set it to true if same card gets clicked twice. The flag can be useEffects dependency (to reset game and do new queryForData() api call). 

retriveCards()
	gets deckID along with card suites. (only initiate upon new game/mount) Pass api data to App component. We need deck id to pass for shuffling upon every card click

drawShuffledCards()
	recieves all the deck cards key-value pairs using deck id. Effectively passing card data as props to display on screen. (not sure best way to store data for when user clicks on card more than once)

shuffleCards()
	used after every user click on card, so we can drawShuffledCards() as a nested function

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
