import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      //You can even -1 to goback to previous screen, -2 to go back to before previous screen
      navigate("/",{state:"Error Page Doesn't exist"})
    }, 1000)
  }, [])
  return (
    <>
      <h1>NotFound</h1>
      {/* <Navigate to="/"/> */}
    </>

  )
}
