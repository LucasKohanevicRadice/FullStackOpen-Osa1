import React, { useState } from 'react'
import Person from './components/Person'






const nameExists = (name, persons) => {

  // return Boolean(persons.find(person => person.name === name))

  if (persons.find(person => person.name === name))
  {return true}

  else{
    return false
  }
}


const ReturnAll = ({persons}) => {

  const all = persons.map(person =>
    <Person key = {person.id} person = {person}/>)
    
    return all
}

// Muista, jos käytät komponentti tyylistä funktiota, sille pitää asettaa 
// Iso ensimmäinen kirjain, muuten se ei toimi.



const App = () => {
  const [ persons, setPersons] = useState([]) 
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


  return (
    <div>

      <h2>Phonebook</h2>

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

      {/* <p>
        {persons.map(person =>
        <Person key = {person.id} person = {person}/>
          )}
      </p> */}
    </div>
  )

}

export default App
