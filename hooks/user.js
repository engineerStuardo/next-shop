import { useQuery, useQueryClient, useMutation } from 'react-query'

import { userInfo } from '../lib/api/user'
import { signIn } from '../lib/api/sign-in'
import { logout } from '../lib/api/logout'

const USER_QUERY_KEY = 'user'

export const useUser = () => {
  const { data } = useQuery(USER_QUERY_KEY, () => userInfo(), {
    staleTime: 30_000,
    cacheTime: Infinity,
  })

  return data
}

export const useSignIn = () => {
  const queryClient = useQueryClient()
  const { isError, isLoading, mutateAsync } = useMutation(
    ({ email, password }) => signIn({ email, password })
  )

  return {
    isError,
    isLoading,
    signIn: async (email, password) => {
      try {
        const user = await mutateAsync({ email, password })
        queryClient.setQueryData(USER_QUERY_KEY, user)
        return true
      } catch (error) {
        return false
      }
    },
  }
}

export const useLogout = () => {
  const queryClient = useQueryClient()
  const { mutateAsync } = useMutation(() => logout())

  return {
    logout: async () => {
      await mutateAsync()
      queryClient.setQueriesData(USER_QUERY_KEY, undefined)
    },
  }
}
