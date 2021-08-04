import React from 'react'
import { useQueryTasks } from '../hooks/useReactQuery'
import { useHistory } from 'react-router-dom'

const divStyle = {
  textAlign: 'center',
}

const ComponentA = () => {
  const { status, data } = useQueryTasks()
  const history = useHistory()

  if (status === 'loading') return <div>{'loading'}</div>
  if (status === 'error') return <div>{'error'}</div>

  return (
    <div style={divStyle}>
      <h1>ComponentA</h1>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
      <button onClick={() => history.push('/component-b')}>push</button>
    </div>
  )
}

export default ComponentA
