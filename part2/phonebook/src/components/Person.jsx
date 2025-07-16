const Person = ({ person, handleRemoveClick }) => {

  return (
    <div>
      <p key={person.name}>{person.name} {person.number}</p>
      <button onClick={() => {handleRemoveClick(person)}}>delete</button>
    </div>
  )
}

export default Person