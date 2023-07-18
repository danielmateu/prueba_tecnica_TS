/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useEffect, useRef, useState } from 'react'
import { User } from './types';
import { UsersList } from './components/UsersList';
import './App.css'


function App() {
  // Fetch data from API
  const [users, setUSers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)
  // Implement a feature that allow us to restore the initial state, meaning that all deleted rows will be recovered with useRef
  const originalUsers = useRef<User[]>([])

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => { setSortByCountry(!sortByCountry) }

  const handleDeleteRow = (id: string) => {
    const filteredUsers = users.filter(user => user.login.uuid !== id)
    setUSers(filteredUsers)

  }

  const handleReset = () => {
    setUSers(originalUsers.current)
  }

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      .then(async res => await res.json())
      .then(res => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setUSers(res.results)
        originalUsers.current = res.results
      })
      .catch(err => console.log(err))
  }, [])

  // Filtrar usuarios por país
  const filteredUsers = filterCountry
    ? users.filter((user => {
      return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
    }))
    : users

  // Ordenar usuarios sin mutar el estado
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const sortedUsers = sortByCountry
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    ? filteredUsers.toSorted((a, b) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
      return a.location.country.localeCompare(b.location.country)
    })
    : filteredUsers


  return (
    <>
      <h1>Hello world, this is a Tech Test</h1>
      <header>
        <button onClick={toggleColors}>Colorea Filas</button>
        <button onClick={toggleSortByCountry}>
          {
            sortByCountry ? 'No ordenar por país' : 'Ordenar por país'
          }

        </button>
        <button onClick={handleReset}>Estado original</button>
        <input
          type="text"
          placeholder='Filtra por país'
          onChange={e => setFilterCountry(e.target.value)}

        />
      </header>

      <main>
        <UsersList
          users={sortedUsers}
          showColors={showColors}
          deleteUser={handleDeleteRow}
        />
      </main>
    </>
  )
}

export default App
