import React from 'react'
import { useHistory } from 'react-router-dom'
import { useQueryClient } from 'react-query'

const divClass = {
  textAlign: 'center',
}

const ComponentB = () => {
  const history = useHistory()
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData()

  return (
    <div style={divClass}>
      <h1>ComponentB</h1>
      {data
        ? data.map((user) => (
            <p className={divClass} key={user.id}>
              {user.name}
            </p>
          ))
        : history.push('/')}
      <button onClick={() => history.push('/')}>push</button>
    </div>
  )
}

export default ComponentB
