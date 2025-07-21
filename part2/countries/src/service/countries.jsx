import axios from 'axios'
const baseUrlCountries = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const baseUrlCountrie = 'https://studies.cs.helsinki.fi/restcountries/api/name/'

const getAll = () => {
  const request = axios.get(baseUrlCountries)
  return request.then(response => response.data)
}

const getCountrie = (countrie) => {
  const request = axios.get(baseUrlCountrie+countrie)
  return request.then(response => response.data)
}

const getWeather = (countrie) => {
  const request = axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${countrie.capitalInfo.latlng[0]}&longitude=${countrie.capitalInfo.latlng[1]}&current=temperature_2m,wind_speed_10m&forecast_days=1&wind_speed_unit=ms`)
  return request.then(response => response.data)
}

export default { getAll, getCountrie, getWeather }