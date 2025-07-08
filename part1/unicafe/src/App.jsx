import { useState } from 'react'
import Button from './Button'
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
      <Button handleClick={handleGoodClick} text={'good'}/>
      <Button handleClick={handleNeutralClick} text={'neutral'}/>
      <Button handleClick={handleBadClick} text={'bad'}/>
      
      {all>10?<Statistics info={info}/>:<p>No feedback given</p>}
      
    </div>
  )
}

export default App

