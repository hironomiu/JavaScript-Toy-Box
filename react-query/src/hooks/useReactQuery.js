import { useQuery } from 'react-query'

const getTasks = async () => {
  const data = await fetch('http://localhost:5000/api/users')
  const json = await data.json()
  console.log(json)
  return json
}

export const useQueryTasks = () => {
  return useQuery({
    queryKey: 'users',
    queryFn: getTasks,
    cacheTime: 30000,
    staleTime: 30000,
  })
}
