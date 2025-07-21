import { useEffect, useState } from 'react'
import countrieService from '../service/countries'

const CountrieInfo = ({ countrie }) => {

  const [weather, setWeather] = useState(null)

  useEffect(() => {
    countrieService
      .getWeather(countrie)
      .then(weather => {
        setWeather(weather)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [countrie])


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
      <h2>Wheater in {countrie.capital}</h2>
      {weather ? (
        <>
          <p>Temperature: {weather.current.temperature_2m} Celsius</p>
          <img width={'100px'} src='https://www.shutterstock.com/image-vector/sun-simple-flat-vector-design-600nw-2528102909.jpg' alt="clima" />
          <p>Wind: {weather.current.wind_speed_10m} m/s</p>
        </>
      ) :
      <p>Loading...</p>}
    </div>
  )
}

export default CountrieInfo