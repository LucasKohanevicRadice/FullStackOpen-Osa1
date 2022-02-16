// const HelloWithProps = (props) => {

//   return (
//     <div>
//       <p>Props are objects and here we define what attributes we call from the object for example here a name: {props.name}</p>
//       <p>We can create as many props and attributes as we want, for example here we can use props.age: {props.age}</p>
//     </div>
//   )

// }

// const Hello = () => {

//   return (
//     <div>
//       <p>Using a function to produce content</p>
//     </div>
//   )
// }


// const App = () => {

//   const ikä = 77

//   return (  
//   <div>
//     <h1>Heippudei maailma</h1>
//     <br/>
//     <Hello/>
//     <br/>
//     <HelloWithProps name="Sussu Subekainen"/>
//     <br/>
//     <HelloWithProps name="Pekka Pappa" age={ikä}/>
//   </div>
//   )

// }




// export default App

// // Sovelluksemme jäi ylläolevaan tilaan  ^

// Komponenttien apufunktiot

// // Laajennetaan komponenttia hello siten, että se antaa arvion tervehdittävän henkilön syntymävuodesta:

// const Hello = (props) => {

//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - props.age
//   }

//   return (
//     <div>

//       <p>
//         Hello {props.name}, you are {props.age} years old.
//       </p>
//       <p>So you are probably born in the year {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {

//   const ikä = 85

//   return (  
//   <div>
//     <h1>Heippudei maailma</h1>
//     <br/>
//     <Hello age = {ikä} name = "Jooseppi"/>

//   </div>
//   )

// }

// export default App

// Tervehdittävän henkilön ikää ei tarvitse välittää funktiolle parametrina
// Funktio näkee sen sisältävälle komponentille välitetyt propsit.

// Syntymävuoden selvittävä funktio on määritelty komponentin toiminnan määrittelevän funktion sisällä.
// Esim. Javalla ohjelmoitaessa metodien määrittely toisen metodin sisällä ei onnistu.
// JavaScriptissä tämän on hyvin yleistä.

// Destrukturointi

// Voimme suoraviivaistaa komponenttia siten,
// Että sijoitamme propsien arvot suoraan muuttujiin name ja age:

// const Hello = (props) => {

//   // Destrukturointia voi käyttää esim. allaolevalla tavalla

//   // const name = props.name
//   // const age = props.age

//   // Tai vaikka näin:

//   const {name, age} = props

//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - age
//   }

//   return (
//     <div>

//       <p>
//         Hello {name}, you are {age} years old.
//       </p>
//       <p>So you are probably born in the year {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {

//   const ikä = 85

//   return (  
//   <div>
//     <h1>Heippudei maailma</h1>
//     <br/>
//     <Hello age = {ikä} name = "Jooseppi"/>

//   </div>
//   )

// }

// export default App

// Destrukturoinnin voi viedä vielä pidemmälle sijoittamalla propsit suoraan muuttujiin name ja age.

// const Hello = ({name, age}) => {
  

//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - age
//   }

//   return (
//     <div>

//       <p>
//         Hello {name}, you are {age} years old.
//       </p>
//       <p>So you are probably born in the year {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {

//   const ikä = 85

//   return (  
//   <div>
//     <h1>Heippudei maailma</h1>
//     <br/>
//     <Hello age = {ikä} name = "Jooseppi"/>

//   </div>
//   )

// }

// export default App

// Sivun uudelleenrenderöinti


// Toistaiseksi tekemämme muutokset ovat olleet staattisia, mutta miten voisimme luoda dynaamista sisältöä?
// Toteutetaan nyt laskuri, jonka arvo kasvaa kun nappia painetaan.

const App = (props) => {
  
  const {counter} = props

  return (
    <div>{counter}</div>
  )
}

export default App
