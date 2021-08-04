import { useQuery } from 'react-query'

const getUsers = async () => {
  const data = await fetch('http://localhost:5000/api/users')
  const json = await data.json()
  return json
}

export const useQueryTasks = () => {
  return useQuery({
    queryKey: 'users',
    queryFn: getUsers,
    cacheTime: 30000,
    staleTime: 30000,
  })
}
