import Person from "./Person"

const Persons = ({ personsToShow, handleRemoveClick }) => {

  return (
    <div>
      {personsToShow.map((person) => {
        return <Person person={person} key={person.name} handleRemoveClick={handleRemoveClick} />
      })}
    </div>
  )
}

export default Persons