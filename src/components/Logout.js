import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.removeItem('token')
    navigate('/')
  }, [])

  return (
    <div className='Logout'>
      <h2>Logging out...</h2>
    </div>
  )
}