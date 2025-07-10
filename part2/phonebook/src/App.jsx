import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const repetido = persons.find((person) => { 
      return person.name === newName 
    })
    if (repetido) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
      name: newName
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    }
    
  }
    


  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>debug: {newName}</div>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return <p key={person.name}>{person.name}</p>
      })}
    </div>
  )
}

export default App