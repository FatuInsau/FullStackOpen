import Estadistica from "./Estadistica"

const Statistics = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
      <Estadistica text={'good'} value={props.info.good}/>
      <Estadistica text={'neutral'} value={props.info.neutral}/>
      <Estadistica text={'bad'} value={props.info.bad}/>
      <Estadistica text={'all'} value={props.info.all}/>
      <Estadistica text={'average'} value={props.info.promedio}/>
      <Estadistica text={'positive'} value={`${props.info.positivo} %`}/>
    </div>
  )
}

export default Statistics