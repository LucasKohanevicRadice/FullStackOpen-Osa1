import React, { useState } from 'react'
import Person from './components/Person'
import SearchBar from "./components/searchbar"

const nameExists = (name, persons) => {

  // return Boolean(persons.find(person => person.name === name))

  if (persons.find(person => person.name === name))
  {return true}

  else{
    return false
  }
}



const ReturnAll = ({persons}) => {


  console.log(`ReturnAll function, persons-prop attribute: ${persons}`)
  const all = persons.map(person =>
    <Person key = {person.id} person = {person}/>)

    console.log(all)
    
    return all
}

//  Muista, jos käytät komponentti tyylistä funktiota, 
// sille pitää asettaa iso ensimmäinen kirjain, muuten se ei toimi.
//  const Component = () => ... ja jossain <Component />, niin Component on komponentti. 
//  const addPerson = () => ... ja jossain addPerson() niin addPerson on funktio.



const App = () => {
  const [ persons, setPersons] = useState([
    {name: "Lucas", number: "05055599912"},
    {name: "FB", number:"0449891324"}
  ]) 

  const [search, setSearch] = useState('')

  const [newNumber, setNewNumber] = useState(
    ''
  )
  const [ newName, setNewName ] = useState(
    ''
    )

  console.log({persons})

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const personObject = {
      name: newName,
      number: newNumber,
      date: new Date().toISOString(),
      id: persons.length + 1,
    }

    if (!nameExists(newName, persons))
      {setPersons(persons.concat(personObject))
      setNewName('')}
    
    else {alert("Name is already in use")}

  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const onSearchSubmit = term => {
    console.log("New search submit", term)

    const closeMatches = persons.map((person) => {
      return <p>{person.name} {person.number}</p>
    })
    
  }


  return (
    <div>

      <h2>Phonebook</h2>

      <SearchBar
      onSearchSubmit={term => onSearchSubmit(term)}
      />

      <form onSubmit = {addPerson}>
        Name:<input value={newName}
        onChange = {handlePersonChange}/> 
        <br></br>
        Number:<input value={newNumber}
        onChange = {handleNumberChange}/>
        <br></br>
        <button type = "submit">save</button>
      </form>

      <h2>Numbers</h2>

      <p><ReturnAll persons = {persons}/></p>

    </div>
  )

}

export default App
