// import ReactDOM from 'react-dom'
// import App from './App'

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )


// Sivun uudelleenrenderöinti


// Toistaiseksi tekemämme muutokset ovat olleet staattisia, mutta miten voisimme luoda dynaamista sisältöä?
// Toteutetaan nyt laskuri, jonka arvo kasvaa kun nappia painetaan.


import ReactDOM from 'react-dom'
import App from './App'

let counter = 1

ReactDOM.render(
  <App counter={counter} />, 
  document.getElementById('root')
)

// HUOM. kun tiedoston index.js sisältö muutetaan,
// React ei välttämättä osaa päivittää selaimeen uutta sisältö ilman, että selaimen koodi ladataan uudelleen refreshaamalla sivu