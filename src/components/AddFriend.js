import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosWithAuth } from '../axiosAuth'

const initialFormValues = {
  name: '',
  age: '',
  email: ''
}

export default function AddFriend() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const navigate = useNavigate()

  useEffect(() => {
    if(!localStorage.token) {
        navigate('/')
      }
  }, [])

  const handleChange = evt => {
    setFormValues({
      ...formValues,
      [evt.target.id]: evt.target.value
    })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    axiosWithAuth().post('/api/friends', formValues)
      .then(navigate('/friends'))
      .catch(err => console.log(err))
  }

  return (
    <div className='AddFriend'>
      <h2>ADD FRIEND</h2>
      <form className='form' onSubmit={handleSubmit}>
        <label className='label'>NAME
          <input className='input' type='text' name='name' id='name' onChange={handleChange} value={formValues.username}/>
        </label>
        <label className='label'>AGE
          <input className='input' type='number' name='age' id='age' onChange={handleChange} value={formValues.username}/>
        </label>
        <label className='label'>EMAIL
          <input className='input' type='email' name='email' id='email' onChange={handleChange} value={formValues.username}/>
        </label>
        <button className='submit'>ADD</button>
      </form>
    </div>
  )
}