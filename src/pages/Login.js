import React from 'react'
import { login } from '../utils/auth'
import { history } from '../history'

const Login = () => {
    const handleSignIn = () => {
        login('abc123')
        history.push('/')
    }
    return (
        <>
            <h1>Login</h1>
            <button onClick={handleSignIn}>Sign in</button>
        </>
    )
}

export default Login
