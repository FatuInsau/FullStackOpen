import { useState } from 'react'
import Boton from './Boton'
import Estadistica from './Estadistica'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => { setGood(good+1) }
  const handleNeutralClick = () => { setNeutral(neutral+1) }
  const handleBadClick = () => { setBad(bad+1) }

  const all = good+neutral+bad
  const promedio = (good-bad)/all
  const positivo = good*100/all?good*100/all:0



  return (
    <div>
      <h1> Give Feedback</h1>
      <Boton handleClick={handleGoodClick} text={'good'}/>
      <Boton handleClick={handleNeutralClick} text={'neutral'}/>
      <Boton handleClick={handleBadClick} text={'bad'}/>
      <h1>Statistics</h1>
      <Estadistica text={'good'} value={good}/>
      <Estadistica text={'neutral'} value={neutral}/>
      <Estadistica text={'bad'} value={bad}/>
      <Estadistica text={'all'} value={all}/>
      <Estadistica text={'average'} value={promedio}/>
      <Estadistica text={'positive'} value={`${positivo} %`}/>
    </div>
  )
}

export default App

