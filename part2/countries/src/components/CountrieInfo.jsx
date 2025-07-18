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
      {weather && weather.main && (
        <>
          <p>Temperature: {weather.main.temp} Celsius</p>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="clima" />
          <p>Wind: {weather.wind.speed} m/s</p>
          <p>Temperature {weather.main.temp} Celsius</p>
          <img src={`https://openweathermap.org/img/wn/${weather.weather.icon}@2x.png`} alt="clima" />
          <p>Wind {weather.wind.speed} m/s</p>
        </>
      )}
    </div>
  )
}

export default CountrieInfo