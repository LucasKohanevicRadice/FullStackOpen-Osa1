
const CountryData = ({searchTerm}) => {

    let countryData = []

    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => data.forEach(country => {

        if (country.name.common.includes(searchTerm)) {
            countryData.push(
            country
            )
        }
    })
    )

    return countryData
}

export default CountryData