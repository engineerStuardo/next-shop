import { useQuery, useQueryClient, useMutation } from 'react-query'

import { getCart } from '../lib/api/cart'

const CART_QUERY_KEY = 'cart'

export const useCart = () => {
  const queryClient = useQueryClient()
  const { isLoading, data } = useQuery(CART_QUERY_KEY, () => getCart())

  return { isLoading, data }
}
