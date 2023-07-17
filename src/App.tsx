/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useEffect, useState } from 'react'
import './App.css'
import { User } from './types';
import { UsersList } from './components/UsersList';


function App() {
  // Fetch data from API
  const [users, setUSers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)

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



  return (
    <>
      <h1>Hello world, this is a Tech Test</h1>
      <header>
        <button onClick={toggleColors}>Colorea Filas</button>
      </header>

      <main>
        <UsersList
          users={users}
          showColors={showColors}
        />
      </main>
    </>
  )
}

export default App
