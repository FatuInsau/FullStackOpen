import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(8))

  const handleAnecdoteClick = () => {
    setSelected(getRandomIntInclusive(0,7))
  }

  const handleVoteClick = () => {
    const copy = [...votes]
    copy[selected] += 1
    return setVotes(copy)
  }

  const mostVote = () => {
    let numeromayor = 0
    let j = 0
    for(let i=0; i<votes.length; i++){
      if(votes[i]>numeromayor){ // 
        numeromayor = votes[i];
        j = i
      }
    }
    return anecdotes[j];
  }
  

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes.</p>
      <button onClick={handleVoteClick}>Vote</button>
      <button onClick={handleAnecdoteClick}>Next anecdote</button>
      <br />
      <h2>Anecdote with most votes</h2>
      <p>{mostVote()}</p>
    </div>
  )
}

export default App
