import React from 'react';


const Searchbar = ({setSearchTerm}) => {

    return (
        <div>
            Search: <input 
            type="text"
            onChange={e => setSearchTerm(e.target.value)}
            />
        </div>
    )
}

export default Searchbar
