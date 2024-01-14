import { useState } from 'react'
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
    <div className='main'>
      <div className='login--field'>
        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <input
            type="email"
            placeholder='Email'
            name="email"
            onChange={handleChange}
            value={input.email}
            required
          />
          <input
            type="password"
            placeholder='Password'
            name="password"
            value={input.password}
            onChange={handleChange}
            required
          />
          <p className='forgot'>Forgot Password?</p>
          <button>Login</button>
        </form>
        <p className='other'>or sign up with</p>
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