import { useState } from 'react'
import { useSignup } from './useSignup'//sign up with email and password
import { useLogout } from "./useLogout"; //log out
import { useLogin } from "./useLogin"; //sign in with email and password
import { useAuthContext } from "./useAuthContext"
import { useFetch } from '../hooks/useFetch'; //use this function to fetch async data- usage: const {data: data, isPending, error}= useFetch('http://localhost:3000/user')

export default function Functions() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {error_signup,signup}= useSignup()
  const {user} = useAuthContext() //use this to check whether the user is logged in anywhere on the web app
  const {error_login, login}= useLogin()
  const {logout}= useLogout()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email,password)
  }
  
  return (
    <div>
        <button onClick={()=>login('test@gmail.com','test12345')}>
            sign in
        </button>
        <button onClick={()=>console.log(user)}>
            check status
        </button>
        <button onClick={()=>logout()}>
            log out
        </button>
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
            <label>
            <span>email:</span>
            <input
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            </label>
            <label>
            <span>password:</span>
            <input
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            </label>
            <button>sign up</button>
            {error_signup && <p>{error_signup}</p>}
        </form>
    </div>
  )
}
