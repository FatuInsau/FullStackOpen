const CountrieInfo = ({ countrie }) => {
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

export default CountrieInfo