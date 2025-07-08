const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.parts.parts.reduce((Total, part)=>Total+part.exercises,0)}</p>
    </div>
  )
}

export default Total