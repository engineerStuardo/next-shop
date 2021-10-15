import React, { useState } from 'react'
import Button from '../components/Button'
import Field from '../components/Field'
import Input from '../components/input'
import Page from '../components/Page'
import { signIn } from '../lib/api/sign-in'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await signIn({ email, password })
    console.log(res)
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
        <Button type='submit'> Sign In</Button>
      </form>
    </Page>
  )
}

export default SignIn
