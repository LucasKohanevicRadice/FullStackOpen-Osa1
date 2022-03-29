
const FilteredCountries = ({countries, searchTerm}) => {

    const filteredCountries = searchTerm ? countries.filter(country => country.name.common.toLowerCase().includes(searchTerm)) : countries
    console.log(filteredCountries)

    return (
        filteredCountries
    )
}

export default FilteredCountries