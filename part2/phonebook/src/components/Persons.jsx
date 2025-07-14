import Person from "./Person"

const Persons = ({ personsToShow }) => {
  return (
    <div>
      {personsToShow.map((person) => {
        return <Person person={person} key={person.name}/>
      })}
    </div>
  )
}

export default Persons