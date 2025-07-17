import { useState } from "react"
import CountrieInfo from "./CountrieInfo"

const Countrie = ({ countrie }) => {

    const [info, setInfo] = useState(false)

    const handleShowClick = () => {
        setInfo(!info)
    }

  return (
      <div>
          <p key={countrie.name.common}>{countrie.name.common}</p>
          {info
          ? <CountrieInfo countrie={countrie}/>
          : null
          }
          <button onClick={handleShowClick}>{info?'Hide':'Show'}</button>
      </div>
  )
}

export default Countrie