/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useEffect, useMemo, useRef, useState } from 'react'
import { SortBy, type User } from './types.d';
import { UsersList } from './components/UsersList';
import './App.css'

function App() {
  // Fetch data from API
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

  const [users, setUSers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  // const [sortByCountry, setSortByCountry] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  const originalUsers = useRef<User[]>([])

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  const handleDeleteRow = (id: string) => {
    const filteredUsers = users.filter(user => user.login.uuid !== id)
    setUSers(filteredUsers)

  }

  const handleReset = () => {
    setUSers(originalUsers.current)
  }

  const handleChangeSort = (sort: SortBy) => {
    return () => {
      setSorting(sort)
    }
  }

  // Filtrar usuarios por país
  const filteredUsers = useMemo(() => {
    return filterCountry != null && filterCountry.length > 0
      ? users.filter((user => {
        return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
      }))
      : users
  }, [filterCountry, users])

  // Ordenar usuarios sin mutar el estado
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const sortedUsers = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    if (sorting === SortBy.NONE) return filteredUsers
    if (sorting === SortBy.NAME) return users.toSorted((a, b) => a.name.first.localeCompare(b.name.first))
    if (sorting === SortBy.LAST) return users.toSorted((a, b) => a.name.last.localeCompare(b.name.last))
    if (sorting === SortBy.COUNTRY) return users.toSorted((a, b) => a.location.country.localeCompare(b.location.country))

    // return sorting === SortBy.COUNTRY ? users.toSorted((a, b) => a.location.country.localeCompare(b.location.country)) : filteredUsers
  }, [filteredUsers, sorting])

  return (
    <>
      <h1>Hello world, this is a Tech Test</h1>
      <header>
        <button onClick={toggleColors}>Colorea Filas</button>
        <button onClick={toggleSortByCountry}>
          {
            sorting === SortBy.COUNTRY ? 'No ordenar por país' : 'Ordenar por país'
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
          changeSorting={handleChangeSort}
        />
      </main>
    </>
  )
}

export default App
