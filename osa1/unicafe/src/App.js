import React, { useState } from 'react'

// step 5, 1.10

const Button = ({nimi,arvo, setteri}) => {

  return (
    <button onClick = {() => setteri(arvo + 1)}>
      {nimi}
    </button>
  )

}


// step 6, 1.11
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      
      <h1>Give feedback</h1>

      <Button nimi = 'Good' arvo = {good} setteri = {setGood}/>
      <Button nimi = 'Neutral' arvo = {neutral} setteri = {setNeutral}/>
      <Button nimi = 'Bad' arvo = {bad} setteri = {setBad}/>
      <h1>Statistics</h1>
      <table>
        <tr>
          <td>Good</td><td>{good}</td>
        </tr>
        <tr>
          <td>Neutral</td><td>{neutral}</td>
        </tr>
        <tr>
          <td>Bad</td><td>{bad}</td>
        </tr>
        <tr>
          <td>All</td><td>{good+bad+neutral}</td>
        </tr>
        <tr>
          <td>Average</td><td>{(good+(bad*(-1)))/(good+neutral+bad)}</td>
        </tr>
        <tr>
          <td>Positive</td><td>{good/(good+bad+neutral)*100 + '%'}</td>
        </tr>
      </table>


     </div>
  )
}

export default App

// step 3 ja 4, 1.8-1.9

// const Statistics = ({good, neutral, bad}) => {

//   if (good == 0 && neutral == 0 && bad == 0) {
//     return (
//       <div>
//         <h1>Statistics</h1>
//         <p>No feedback given</p>
//       </div>
//     )
//   }
//   else {
//     return (
    
//       <div>
    
//         <h1>Statistics</h1>
//         <p>Good {good}</p>
//         <p>Neutral {neutral}</p>
//         <p>Bad {bad}</p>
//         <p>All {good+neutral+bad}</p>
//         <p>Average {(good + (neutral*0) + (bad*-1))/(good+neutral+bad)}</p>
//         <p>Positive {good/(good+neutral+bad)*100} %</p>
    
//       </div>
//       )
//   }
// }


// step 5, 1.10
// const Statisticsline = (props) => {

//   const {text, value} = props

//   return (
//     <div>
//       <p>{text} {value}</p>
//     </div>
//   )
// }


// step 5, 1.10
// const App = () => {
//   // tallenna napit omaan tilaansa
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)


//   return (
//     <div>
      
//       <h1>Give feedback</h1>

//       <Button nimi = 'Good' arvo = {good} setteri = {setGood}/>
//       <Button nimi = 'Neutral' arvo = {neutral} setteri = {setNeutral}/>
//       <Button nimi = 'Bad' arvo = {bad} setteri = {setBad}/>
//       <h1>Statistics</h1>
//       <Statisticsline text = 'Good' value = {good}/>
//       <Statisticsline text = 'Neutral' value = {neutral}/>
//       <Statisticsline text = 'Bad' value = {bad}/>
//       <Statisticsline text = 'All' value = {good+neutral+bad}/>
//       <Statisticsline text = 'Average' value = {good+(bad*-1)/good+bad+neutral}/>
//       <Statisticsline text = 'Positive' value = {good/(good+bad+neutral)*100 + ' %'}/>

//     </div>
//   )
// }

// export default App



