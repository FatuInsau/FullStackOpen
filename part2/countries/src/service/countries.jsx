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
  const request = axios.get(`https://api.openweathermap.org/data/2.5/onecall/overview?lat=${countrie.capitalInfo.latlng[0]}&lon=${countrie.capitalInfo.latlng[1]}&appid=${key}`)
  return request.then(response => response.data)
}

export default { getAll, getCountrie, getWeather }