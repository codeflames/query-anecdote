import { useQuery, useQueryClient } from 'react-query'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { getAllAnecdotes } from './requests'


const App = () => {

  const queryClient = new useQueryClient()

  const newAnecdote = (anecdote) =>{
    
  }


  const { isLoading, isError, data, error } = useQuery({
    queryKey: 'anecdotes',
    queryFn: getAllAnecdotes,
    retry: 1,
    refetchOnWindowFocus: false,
  })

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

console.log(data)

  const handleVote = (anecdote) => {
    console.log('vote')
  }


  const anecdotes = data
  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
