const RenderableCountries = ({filteredCountries}) => {

    let renderableCountries = null

    console.log(filteredCountries.length)
    console.log(renderableCountries)

    if (filteredCountries.length === 0) {
        renderableCountries = <p>No countries to show, try to change the filters.</p>
    }

    else if (filteredCountries.length === 1) {

        const countryLanguages = filteredCountries[0].languages

        // one way:
        // let languagesArr = []

        // for (const lang in countryLanguages) {
        //     languagesArr.push(countryLanguages[lang])
        // }

        // Another way:

        let languagesArr = Object.values(countryLanguages)
        
        let languagesList = languagesArr.map(language =>
            <li>
                {language}
            </li>
            )

        renderableCountries = filteredCountries.map(country => 
        <div>
            <h1>{country.name.common}</h1>
            <br></br>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area}</p>
            <br></br>
            <h2>Languages:</h2>
            {languagesList}
            <br></br>
            <img src={country.flags["png"]} alt={country.name.common}/>
        </div>
        )
    }

    else if (filteredCountries.length > 0 && filteredCountries.length <= 10) {
        renderableCountries = filteredCountries.map(country => <p>{country.name.common}</p>)
    }


    else {
        renderableCountries = <p>Too many countries to show, specify more filters</p>
    }
    
    return (
        <div>
            {renderableCountries}
        </div>
    )

}

export default RenderableCountries