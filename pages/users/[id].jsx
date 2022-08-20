import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const UserDetails = () => {
  // Data
  const router = useRouter()

  const { id } = router.query

  //States
  const [user, setUser] = useState()

  //Functions
  const obtenerUsers = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    )

    setUser(response.data)
  }

  //Effects
  useEffect(() => {
    obtenerUsers()
  }, [])

  // Detalle del producto
  return user ? (
    <>
      <Head>
        <title>{user.name}</title>
      </Head>
      <div>
        <h1>Nombre: {user.name}</h1>
        <p>{user.username}</p>
        <p>{user.website}</p>
        <p>{user.company.name}</p>
        <p>{user.company.bs}</p>
      </div>
    </>
  ) : (
    <p>Loading...</p>
  )
}
export default UserDetails
