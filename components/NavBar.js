import React from 'react'
import Link from 'next/link'

import { useUser, useLogout } from '../hooks/user'

const NavBar = () => {
  const user = useUser()
  const { logout } = useLogout()

  const handleSignOut = async () => {
    await logout()
  }

  return (
    <nav className='py-5 text-sm px-14'>
      <ul className='flex items-center justify-between gap-2'>
        <li>
          <Link href='/'>
            <a className='text-lg font-extrabold'>Next Shop</a>
          </Link>
        </li>
        {user ? (
          <div className='flex space-x-3'>
            <li>
              <Link href='/cart'>
                <a href=''>Cart</a>
              </Link>
            </li>
            <li>{user.name}</li>
            <li>
              <button onClick={handleSignOut}>Sign Out</button>
            </li>
          </div>
        ) : (
          <li>
            <Link href='/sign-in'>
              <a>Sign In</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default NavBar
