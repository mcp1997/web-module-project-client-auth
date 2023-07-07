import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosWithAuth } from '../axiosAuth'

export default function Friendlist() {
  const [friends, setFriends] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axiosWithAuth().get('/api/friends')
      .then(res => {
        setFriends(res.data)
      })
      .catch(err => {
        console.log(err)
        navigate('/')
      })
  }, [])

  return (
    <div className='Friendlist'>
      <h2>FRIENDS LIST</h2>
      <div className='friends-container'>
        {
          friends.map(friend => {
            return (
              <div key={friend.id} className='friend' >
                <h3>{friend.name}</h3>
                <p>Age: {friend.age}</p>
                <p>Email:<br />{friend.email}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}