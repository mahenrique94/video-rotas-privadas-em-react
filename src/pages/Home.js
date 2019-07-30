import React from 'react'
import { logout } from '../utils/auth'
import { history } from '../history'

const Home = () => {
    const handleLogout = () => {
        logout()
        history.push('/login')
    }
    return (
        <>
            <h1>Home</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Home
