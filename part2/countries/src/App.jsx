import { useState, useEffect } from 'react'
import countrieService from './service/countries'
import CountrieInfo from './components/CountrieInfo'
import Countrie from './components/Countrie'

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
    if (!filter) {
      return null
    } else if (countries.length>10) {
      return <p> Too many matches, specify another filter</p>
    } else if (countries.length>1) {
      return (countries.map(n => <Countrie countrie={n} key={n.name.common}/>))
    } else {
      const countrie = countries[0]
      return (
        <CountrieInfo countrie={countrie}/>
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
