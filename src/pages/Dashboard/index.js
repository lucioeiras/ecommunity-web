import React from 'react'
import { useParams } from 'react-router-dom'

export default function Dashboard() {
  const { user_id } = useParams()

  console.log(user_id)

  return (
    <h1>Dashboard</h1>
  )
}