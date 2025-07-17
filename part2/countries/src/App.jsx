import { useState, useEffect } from 'react'
import countrieService from './service/countries'

function App() {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    countrieService
      .getAll()
      .then(initialCountries => {        
        setCountries(initialCountries)
      })
  }, [])

  const handleFindChange = (event) => {
    const newFilter = event.target.value
    setFilter(newFilter)
    const countriesFilter = newFilter
    ? countries.filter(c => c.name.common.toLowerCase().includes(newFilter.toLowerCase()))
    : countries
    setCountries(countriesFilter)
    
  }

  const showCountries = () => {
    console.log(countries)
    if (!filter) {
      return null
    } else if (countries.length>10) {
      return <p> Too many matches, specify another filter</p>
    } else if (countries.length>1) {
      return (countries.map(n => <p key={n.name.common}>{n.name.common}</p>))
    } else {
      const countrie = countries[0]
      console.log( 'pais',countrie)
      return (
        <div>
          <h1>{countrie.name.official}</h1>
          <p>Capital: {countrie.capital}</p>
          <p>Area: {countrie.area}</p>
          <h2>Languages</h2>
          <ul>
            {Object.values(countrie.languages).map(n => <li key={n}>{n}</li>)}
          </ul>
          <img src={countrie.flags.png} alt="bandera" />
        </div>
      )
    }
  }


  return (
    <>
    <div>
          find countries  <input onChange={handleFindChange}/>
    </div>
    {showCountries()}
    </>
  )
}

export default App
