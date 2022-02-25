import React, { useState, useEffect } from 'react'
import SearchBar from "./components/searchbar"
import AddPersonForm from './components/addPersonForm'
import axios from "axios"
import personService from "./services/persons"


const nameExists = (name, persons) => {

  if (persons.find(person => person.name === name))
  {return true}

  else{
    return false
  }
}


const ReturnPersons = ({persons, searchTerm, setPersons}) => {


  if (searchTerm) {

    const searchResults = persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
 
    if (searchResults.length > 0) {

      const foundPersons = searchResults.map(result => <p>{result.name}: {result.number}
          <button onClick={() => {
            console.log(`Persons before deletion:`, persons)
            personService
            .deleteObject(result.id)
            .then(data => {
              console.log("delete succesful")
              console.log("response.data:", data)
              console.log("Persons array after deletion:", persons)
              setPersons(persons.map(person => person))
            })
          }}>Delete</button>
        </p>)

      return (
          <div>
            {foundPersons}
          </div>
      )
    }
  }
    const allPersonsData = persons.map(person => <p>{person.name}: {person.number}
          <button onClick={() => {
            console.log(`Persons before deletion:`, persons)
            personService
            .deleteObject(person.id)
            .then(data => {
              console.log("delete succesful")
              console.log("response.data:", data)
              console.log("Persons array after deletion:", persons)
              setPersons(persons.filter(p => persons.id !== p.id))
            })
          }}>Delete</button>
    </p>)

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

  //  palauttaa JSON datan, db.jsonista
  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      console.log("promise fulfilled")
      console.log(initialPersons)
      setPersons(initialPersons)
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

    //Vanha tapa lisätä uusi nimi persons listalle:

    // if (!nameExists(newName, persons)) 
    //   {setPersons(persons.concat(personObject))
    //   setNewName('')}

    // Uusi tapa lisätä person-objekti, suoraan db.json serverille, JSON-objektina.
    if(!nameExists(newName, persons)) {
      personService
      .create(personObject)
      .then(returnedPerson => {
        console.log(returnedPerson)
        setPersons(persons.concat(returnedPerson)) // Uusi muistiinpano ei automaattisesti renderöidy sivulle, ellei komponentille app aseteta uutta tilaa, kuten alempana (setterit)
        setNewName("")
        setNewNumber("")
      })
    }
    
    else {alert("Name is already in use")}

  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
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

      <ReturnPersons 
      persons = {persons} 
      searchTerm={searchTerm}
      setPersons = {setPersons}/>

    </div>
  )

}

export default App
