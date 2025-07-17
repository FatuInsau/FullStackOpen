import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [notificationTipe, setNotificationTipe] = useState('good')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const personsToShow = newFilter
    ? persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
    : persons

  const addPerson = (event) => {
    event.preventDefault()
    const repetidoNombre = persons.find((person) => {
      return person.name === newName
    })
    const repetidoNumero = persons.find((person) => {
      return person.number === newNumber
    })
    if (repetidoNombre && repetidoNumero) {
      // Ya esta agregado igual
      alert(`${newName} is already added to phonebook`)
    } else if (repetidoNombre) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        // Se cambia el numero
        const changePerson = persons.find(n => n.name === newName)
        const changePersons = { ...changePerson, number: newNumber }
        personService
          .update(changePerson.id, changePersons)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== returnedPerson.id ? p : returnedPerson))
            setNewName('')
            setNewNumber('')
            setNotificationMessage(`${changePerson.name} was successfully updated`)
            setNotificationTipe('good')
            setTimeout(() => {
              setNotificationMessage(null)
            }, 5000)
          })
          .catch(error => {
            setNotificationMessage(`Information of ${changePerson.name} has already been removed from server`)
            setNotificationTipe('bad')
            setTimeout(() => {
              setNotificationMessage(null)
            }, 5000)
            setPersons(persons.filter(n => n.name !== changePerson.name))
          })
      }
    } else {
      // Se crea un nuevo contacto
      const personObject = {
        name: newName,
        number: newNumber
      }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
      setNotificationMessage(`Added ${personObject.name}`)
      setNotificationTipe('good')
      setTimeout(() => {
        setNotificationMessage(null)
      }, 5000)
    }
  }

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    // console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const handleRemoveClick = (person) => {
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
        .remove(person.id)
        .then(function (response) {
          setPersons(personsToShow.filter((personToShow) => (personToShow.id !== response.id)))
          setNotificationMessage(`${person.name} was successfully delete`)
          setNotificationTipe('good')
            setTimeout(() => {
              setNotificationMessage(null)
            }, 4000)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={notificationMessage} notificationTipe={notificationTipe}/>

      <Filter handleFilterChange={handleFilterChange} />

      <h3>add a new</h3>

      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h3>Numbers</h3>

      <Persons personsToShow={personsToShow} handleRemoveClick={handleRemoveClick} />

    </div>
  )
}

export default App