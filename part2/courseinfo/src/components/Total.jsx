const Total = (props) => {
  return (
    <div>
      <strong>
        <p> Total of {props.parts.parts.reduce((Total, part)=>Total+part.exercises,0)} exersices</p>
      </strong>
      
    </div>
  )
}

export default Total