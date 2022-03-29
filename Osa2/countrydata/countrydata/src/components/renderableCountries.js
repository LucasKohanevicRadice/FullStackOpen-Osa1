const RenderableCountries = ({filteredCountries}) => {

    let renderableCountries = null

    if (filteredCountries.length === 0) {
        renderableCountries = <p>No countries to show, try to change the filters.</p>
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