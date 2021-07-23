import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old </p>
      </div>
  )
}



const App = () => {

  const nimi = "pekka"
  const ika = 10

  return(
    <div>
      <h1>Greetings</h1>
      <Hello name= "Gegels" age = {25+47}/>
      <Hello name = "pipölsh" age = {44+1} />
      <Hello name = {nimi} age = {ika} />
    </div>
  )
}

//   const now = new Date()
//   const a = 10
//   const b = 20
//   return React.createElement(

//     'div',
//     null,
//     React.createElement(
//       'p', null, 'Hello world , it is ', now.toString()
//     ),
//     React.createElement(
//       'p', null, a, ' plus ', b, ' is ', a+b
//     )
//   )
// }
  // return (
  //   <div>
  //     <p>Hello world, it is {now.toString}</p>
  //     <p> plus {b} is {a+b} </p>

  //   </div>


export default App