import React, {useEffect, useState} from 'react';


const Searchbar = ({onSearchSubmit}) => {

    const [term, setTerm] = useState('')

    useEffect(() => {
        if(term !== "") {
            onSearchSubmit(term)
        }
    }, [term, onSearchSubmit])

    return (
        <div>
            Search: <input 
            type="text"
            onChange={e => setTerm(e.target.value)}
            value={term} />


        </div>
    )
}

export default Searchbar
