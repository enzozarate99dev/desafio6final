import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/Link';
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function ActionAreaCard({ name, email }) {

  //States
  const [users, setUsers] = useState([])

  //Functions
  const obtenerUsers = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${name}`,
    )

    setUsers(response.data)
  }

  //Effects
  useEffect(() => {
    obtenerUsers()
  }, [])


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link
          href={`/users/${name}`}
          underline="none">

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {email}
            </Typography>


          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}
