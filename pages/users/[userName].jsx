
import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const UserDetails = () => {
  // Data
  const router = useRouter()

  const { userName } = router.query

  //States
  const [users, setUsers] = useState([])

  //Functions
  const obtenerUsers = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userName}`,
    )

    setUsers(response.data)
  }

  //Effects
  useEffect(() => {
    obtenerUsers()
  }, [])

  // Detalle del producto
  return users ? (
    <>
    <Head><title>{users.name}</title></Head>
  <div>
    <h1>{users.name}</h1>
    <p>{users.username}</p>
    <p>{users.website}</p>
    {/* <p>{users.company.name}</p>
    <p>{users.company.bs}</p> */}
  </div>
    </>
    ): (
      <p>Loading...</p>
    )
};
export default UserDetails