import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='page-con'>
        <Link to='/'>
            <h1>Pokemon Cards</h1>
        </Link>
    </div>
  )
}

export default Header