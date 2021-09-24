import React, { useState } from 'react'

//  MUISTA KIRJOTTAA FUNKTIOITTEN ENSIMMÄISET KIRJAIMET AINA ISOLLA, MUUTEN FUNKTION KUTSU EI TOIMI

const Summon_new_anecdote = ({index, button_text, setter, list}) => {

  return(
    <button onClick = {() => setter(index = Math.floor(Math.random() * list.length) )}>
    {button_text}
  </button>
  )
  
}

const Vote_n_button = ({index, button_text, dict, setter}) => {
  return (
  
    <button onClick = {() => {

      const copy = [...dict]
      copy[index] += 1
    
      setter(copy)} 
    }>
      {button_text}
    </button>
  )
}





const MostVotes = ({array}) => {
  return (
    {array}.indexOf(Math.max(...array))
  )
}


const App = () => {
  const anecdotes = 
      ['If it hurts, do it more often.',
       'Adding manpower to a late software project makes it later!',
       'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
       'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
       'Premature optimization is the root of all evil.',
       'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
       'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.']
    
  const initialvotes = 
    [   0,
        0,
        0,
        0,
        0,
        0,
        0]
  
  
   

  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(initialvotes)
 


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Summon_new_anecdote index = {selected} button_text = {'Next anecdote'} setter = {setSelected} list = {anecdotes}/>
      <Vote_n_button index = {selected} button_text = {'vote'} dict = {votes} setter = {setVote} />
      <p>Has {votes[selected]} votes</p>

      <h1>Anecdote with most votes</h1>

      <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>

      
    </div>
  )
}

export default App