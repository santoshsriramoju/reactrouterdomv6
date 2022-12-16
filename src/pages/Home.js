import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Home() {
  const location = useLocation();


  return (
    <h1>Home - {location.state}</h1>
  )
}
