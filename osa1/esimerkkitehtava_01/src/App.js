import React from 'react'
const Hello = ({ name, age}) => {

  // ylempänä destrukturointi on viety vielä pidemmälle.
  // alempana on aikaisemmin käytetty tapa muodostaa funktio
  // Jossa propsit alustavat muuttujia

// const Hello = (props) => {

//   const { name, age} = props
  // Ylempänä on muuttujat asetettu destrukturoinnilla
  // Alempana muuttujat luotu perinteisillä tyyleillä
  // const name = props.name
  // const age = props.age
  const bornYear = () => new Date().getFullYear() - age
  // Jos nuolifunktio koostuu ainoastaan yhdestä komennosta
  // ei funktion runkoa tarvitse kirjoittaa aaltosulkeiden sisään
  // funktio palauttaa ainoan komentonsa arvon.

  // seuraavat ovat siit vaihtoehtoisia tapoja toteuttaa ylempi funktio:
  
  // const bornYear = () => new Date().getFullYear() - age

  // const bornYear = () => {
    // return new Date().getFullYear() - age }
  
  
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()} </p>
    </div>
  )
}

const App = () => {
  const nimi = 'Pekka'
  const ika = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
    </div>
  )
}

export default App