import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [input, setInput] = useState({
    email: "",
    password: ""
  })

  function handleChange(event) {
    const { name, value } = event.target
    setInput(prevInput => ({
      ...prevInput,
      [name]: value
    }))
  }

  function handleSubmit(event) {
    event.preventDefalt();
  }

  return (
    <div className='form--data'>
      <img src="/images/login 2.png" alt="login photo" />
      <form onSubmit={handleSubmit}>
        <h3 className='heading'>Login Details</h3>
        <div className="form--elements">
          <input
            type="email"
            placeholder='Email'
            name="email"
            value={input.email}
            onChange={handleChange}
            required
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={input.password}
            onChange={handleChange}
            required
          />
          <p className='small'>Forgot Password?</p></div>
        <button>Login</button>
      </form>
      <div className="other--options">
        <div className="span">
          <span className='rect'></span>
          <span className='text'>Or Sign Up With</span>
          <span className='rect2'></span>
        </div>
        <div className="logos">
          <img className='logo' src="/images/Google logo.png" alt="google logo" />
          <img className='logo' src="/images/Facbook.png" alt="facebbook logo" />
          <img className='logo' src="/images/Group.png" alt="apple logo" />
        </div>
      </div>
    </div>
  )
}

export default App