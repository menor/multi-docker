import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
      I'm other page
      <Link to="/">Back Home</Link>
    </div>
  )
}
