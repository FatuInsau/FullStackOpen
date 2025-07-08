import { useState } from 'react'
import Boton from './Boton'
import Statistics from './Statistics'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => { setGood(good+1) }
  const handleNeutralClick = () => { setNeutral(neutral+1) }
  const handleBadClick = () => { setBad(bad+1) }

  const all = good+neutral+bad
  const info = {
    good: good,
    neutral:neutral,
    bad:bad,
    all: all,
    promedio:(good-bad)/all?(good-bad)/all:0,
    positivo: good*100/all?good*100/all:0
  }



  return (
    <div>
      <h1> Give Feedback</h1>
      <Boton handleClick={handleGoodClick} text={'good'}/>
      <Boton handleClick={handleNeutralClick} text={'neutral'}/>
      <Boton handleClick={handleBadClick} text={'bad'}/>
      
      <Statistics info={info}/>
    </div>
  )
}

export default App

