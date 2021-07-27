const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
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


