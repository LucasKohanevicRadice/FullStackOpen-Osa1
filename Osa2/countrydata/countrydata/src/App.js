import './App.css';
import React, { useState, useEffect } from 'react'
import Searchbar from './components/searchBar'
import CountryData from './components/fetchCountryData'




let arr = [1,2,2,3,45,5,3]

const App = () => {

  const [searchTerm, setSearchTerm] = useState("")
  console.log(CountryData(searchTerm))
  console.log(searchTerm)

  return (
    <div className="App">
    
      <Searchbar setSearchTerm = {setSearchTerm}/>
      <p>{searchTerm}</p>
    </div>
  );
}

export default App;
