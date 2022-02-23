import React, { useState, useEffect } from 'react'
import SearchBar from "./components/searchbar"
import AddPersonForm from './components/addPersonForm'
import axios from "axios"


const nameExists = (name, persons) => {

  if (persons.find(person => person.name === name))
  {return true}

  else{
    return false
  }
}



const ReturnPersons = ({persons, searchTerm}) => {


  if (searchTerm) {

    const searchResults = persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
 
    if (searchResults.length > 0) {

      const foundPersons = searchResults.map(result => <p>{result.name}: {result.number}</p>)
      console.log("Row 29, foundPersons variable:", foundPersons)

      return (
          <div>
            {foundPersons}
          </div>
      )

    }

  }
  const allPersonsData = persons.map(person => <p>{person.name}: {person.number}</p>)
  console.log("row 39, allPersonsData", allPersonsData)

  return (
    <div>
      {allPersonsData}
    </div>
  )
}

//  Muista, jos käytät komponentti tyylistä funktiota, 
// sille pitää asettaa iso ensimmäinen kirjain, muuten se ei toimi.
//  const Component = () => ... ja jossain <Component />, niin Component on komponentti. 
//  const addPerson = () => ... ja jossain addPerson() niin addPerson on funktio.



const App = () => {
  const [ persons, setPersons] = useState([]) 

  const [searchTerm, setSearchTerm] = useState('')

  const [newNumber, setNewNumber] = useState(
    ''
  )
  const [ newName, setNewName ] = useState(
    ''
    )

  useEffect(() => {
    console.log("effect")
    axios
    .get("http://localhost:3001/persons")
    .then(response => {
      console.log("promise fulfilled")
      setPersons(response.data)
    })
  },[])
  

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

      <SearchBar
      setSearchTerm={setSearchTerm}
      />
      
      <h2>Phonebook</h2>
      <AddPersonForm 
      addPerson={addPerson}
      newName={newName}
      handlePersonChange={handlePersonChange}
      newNumber={newNumber}
      handleNumberChange={handleNumberChange}/>


      <h2>Numbers</h2>

      <ReturnPersons persons = {persons} searchTerm={searchTerm}/>

    </div>
  )

}

export default App
