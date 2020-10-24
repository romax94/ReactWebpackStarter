import React from 'react'
import { Link } from 'react-router-dom'

export function Home() {
    return (
        <div>
            Home Page
            <Link to="/users">Go to users</Link>
        </div>
    )
}