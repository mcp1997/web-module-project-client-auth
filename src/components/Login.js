import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const initialFormValues = {
  username: '',
  password: ''
}

export default function Login() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const navigate = useNavigate()

  const handleChange = evt => {
    setFormValues({
      ...formValues,
      [evt.target.id]: evt.target.value
    })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    axios.post('http://localhost:9000/api/login', formValues)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        setFormValues(initialFormValues)
        navigate('/friends')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='Login'>
      <h2>LOGIN</h2>
      <form className='form' onSubmit={handleSubmit}>
        <label className='label'>USERNAME
          <input className='input' type='text' name='username' id='username' onChange={handleChange} value={formValues.username}/>
        </label>
        <label className='label'>PASSWORD
          <input className='input' type='password' name='password' id='password' onChange={handleChange} value={formValues.password} />
        </label>
        <button className='submit'>SUBMIT</button>
      </form>
    </div>
  )
}