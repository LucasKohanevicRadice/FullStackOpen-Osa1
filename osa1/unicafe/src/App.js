import React, { useState } from 'react'

const Button = ({nimi,arvo, setteri}) => {

  return (
    <button onClick = {() => setteri(arvo + 1)}>
      {nimi}
    </button>
  )

}



const Statistics = ({good, neutral, bad}) => {

  if (good == 0 && neutral == 0 && bad == 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  else {
    return (
    
      <div>
    
        <h1>Statistics</h1>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>All {good+neutral+bad}</p>
        <p>Average {(good + (neutral*0) + (bad*-1))/(good+neutral+bad)}</p>
        <p>Positive {good/(good+neutral+bad)*100} %</p>
    
      </div>
      )
  }
}



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      
      <h1>Give feedback</h1>

      <Button nimi = 'good' arvo = {good} setteri = {setGood}/>
      <Button nimi = 'neutral' arvo = {neutral} setteri = {setNeutral}/>
      <Button nimi = 'bad' arvo = {bad} setteri = {setBad}/>

      <Statistics good = {good} neutral = {neutral} bad = {bad}/>

    </div>
  )
}

export default App



