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

// const create = newObject => {
//   const request = axios.post(baseUrl, newObject)
//   return request.then(response => response.data)
// }

// const update = (id, newObject) => {
//   const request = axios.put(`${baseUrl}/${id}`, newObject)
//   return request.then(response => response.data)
// }

// const remove = (id) => {
//   const request = axios.delete(`${baseUrl}/${id}`)
//   return request.then(response => response.data)
// }

export default { getAll, getCountrie }