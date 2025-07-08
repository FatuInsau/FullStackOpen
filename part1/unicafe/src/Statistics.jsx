import StatisticLine from "./StatisticLine"

const Statistics = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
            <StatisticLine text={'good'} value={props.info.good}/>
            <StatisticLine text={'neutral'} value={props.info.neutral}/>
            <StatisticLine text={'bad'} value={props.info.bad}/>
            <StatisticLine text={'all'} value={props.info.all}/>
            <StatisticLine text={'average'} value={props.info.promedio}/>
            <StatisticLine text={'positive'} value={`${props.info.positivo} %`}/>   
        </tbody>
      </table>
      
    </div>
  )
}

export default Statistics