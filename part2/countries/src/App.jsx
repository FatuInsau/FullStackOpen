import { useState, useEffect } from 'react'
import countrieService from './service/countries'
import CountrieInfo from './components/CountrieInfo'
import Countrie from './components/Countrie'

function App() {

  const [allCountries, setAllCountries] = useState([])
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    countrieService
      .getAll()
      .then(initialCountries => {        
        setAllCountries(initialCountries)
      })
      .catch((error)=>{
        console.log('error')
      })
  }, [])

  const handleFindChange = (event) => {
    const newFilter = event.target.value
    setFilter(newFilter)
    const countriesFilter = newFilter
    ? allCountries.filter(c => c.name.common.toLowerCase().includes(newFilter.toLowerCase()))
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
    } else if (countries.length===0){
      return <p>No match</p>
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
          find countries  <input value={filter} onChange={handleFindChange}/>
    </div>
    {showCountries()}
    </>
  )
}

export default App
