import React, {useState} from 'react'
import CreateTrip from './../createTrip'

const Em = () => {

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

export default Em
