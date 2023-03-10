import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'; //use this function to fetch async data- usage: const {data: data, isPending, error}= useFetch('http://localhost:3000/user')

//user authentication functions
import { useSignup } from './useSignup'//sign up with email and password
import { useLogout } from "./useLogout"; //log out
import { useLogin } from "./useLogin"; //sign in with email and password
import { useAuthContext } from "./useAuthContext" //used to check the user's current authentication status
import FetchData from "./FetchData";

export default function Functions() {
    //states to track form
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //user authentication functions
  const {error_signup,signup}= useSignup()
  const {user} = useAuthContext() //use this to check whether the user is logged in anywhere on the web app
  const {error_login, login}= useLogin()
  const {logout}= useLogout()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email,password)
  }

  //fetchData is conditional on the user's uid so need to check that he is registered
  return (
    <div>
        {user && <FetchData/>}  
        <button onClick={()=>login('test@gmail.com','test12345')}>
            Sign in
        </button>
        {error_login && <p>{error_login}</p>}
        <button onClick={()=>console.log(user)}>
            Check status
        </button>
        <button onClick={()=>logout()}>
            Log Out
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
