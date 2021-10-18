import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Button from '../components/Button'
import Field from '../components/Field'
import Input from '../components/input'
import Page from '../components/Page'
import { useSignIn } from '../hooks/user'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const { isError, isLoading, signIn } = useSignIn()

  const handleSubmit = async e => {
    e.preventDefault()
    const valid = await signIn(email, password)
    valid && router.push('/')
  }

  return (
    <Page title='Sign In'>
      <form onSubmit={handleSubmit}>
        <Field label='Email'>
          <Input
            type='email'
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />
        </Field>
        <Field label='Password'>
          <Input
            type='password'
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
          />
        </Field>
        {isError && <p className='mt-3 text-red-600'>Invalid Cretentials</p>}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Button type='submit'> Sign In</Button>
        )}
      </form>
    </Page>
  )
}

export default SignIn
