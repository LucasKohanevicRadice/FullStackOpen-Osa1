import './App.css';
import React, { useState, useEffect } from 'react'
import Searchbar from './components/searchBar'
import FilteredCountries from './components/filteredCountries'
import RenderableCountries from './components/renderableCountries';

const App = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [countries, setCountries] = useState([])

  const fetchCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => 
      setCountries(data)
      )
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return (
    <div className="App">
      <Searchbar setSearchTerm = {setSearchTerm}/>
      <RenderableCountries filteredCountries={FilteredCountries({countries,searchTerm})}/>
    </div>
  );
}

export default App;
