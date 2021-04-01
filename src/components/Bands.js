import React from 'react'

const Bands = ({ bands }) => {

  return (
    <div>
      <ul>
        { bands.map((band, i) => <li key={i}> { band.name } </li>) }
      </ul>
    </div>
  )
}

export default Bands
