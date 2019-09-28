
import React, {useState, useEffect} from 'react'
import CreateTrip from './../createTrip'
import withAuth from '../../hoc/withAuth'

const Em = (props) => {

  const [ mainState, setMainState ] = useState({
    createTrip: false,
  })
  useEffect(()=>{
    if(props.user.userType !== 'volunteer'){
      props.history.push('/me');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
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

export default withAuth(Em)
