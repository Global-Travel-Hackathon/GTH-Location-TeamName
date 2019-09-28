import React, { useState } from 'react';
import { ReactComponent as WikiEm } from '../logotipo.svg'
import withAuth from '../hoc/withAuth.js';

import CreateTrip from './createTrip'

const Private = (props) => {

  const [ mainState, setMainState ] = useState({
    createTrip: false,
  })

  const handleCreateTrip = () => {
    setMainState({
      createTrip: !mainState.createTrip
    })
  }

  return (
    <>
      {!mainState.createTrip ?
        <>
          <WikiEm className="logo"/>
          <h1>Welcome Paquito</h1>

          <button onClick={() => handleCreateTrip()}>+</button>
        </>
      :
        <>
          <button onClick={() => handleCreateTrip()}>Back</button>
          <CreateTrip />
        </>
      }

    </>
  )
}

export default withAuth(Private);