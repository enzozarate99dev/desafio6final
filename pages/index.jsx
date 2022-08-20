import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  //States
  const [users, setUsers] = useState([])

  // Functions
  const obtenerUsers = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    )

    setUsers(response.data)
  }

  // Effects
  useEffect(() => {
    obtenerUsers()
  }, [])

  //Renderizado
  return (
    <div className={styles.container}>
      <Head>
        <title>Usuarios </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Usuarios</h1>

      {users.map((user) => (
        <Card key={user.id} id={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  )
}
export default Home
