/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useEffect, useState } from 'react'
import './App.css'
import { User } from './types';
import { UsersList } from './components/UsersList';


function App() {
  // Fetch data from API
  const [users, setUSers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      .then(async res => await res.json())
      .then(res => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setUSers(res.results)
      })
      .catch(err => console.log(err))
  }, [])

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => { setSortByCountry(!sortByCountry) }
  // Ordenar usuarios sin mutar el estado
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const sortedUsers = sortByCountry
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    ? users.toSorted((a, b) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
      return a.location.country.localeCompare(b.location.country)
    })
    : users


  const handleDeleteRow = (id: string) => {
    const filteredUsers = users.filter(user => user.login.uuid !== id)
    setUSers(filteredUsers)
  }


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
