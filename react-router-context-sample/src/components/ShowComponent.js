import React from 'react'
import { useParams } from 'react-router'

const ShowComponent = () => {
  const { id } = useParams()
  return <div>{id}</div>
}

export default ShowComponent
