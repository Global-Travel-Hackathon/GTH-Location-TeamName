import React, {useEffect, useState} from 'react'
import withAuth from '../../hoc/withAuth';
import io from 'socket.io-client'

const socket = io(process.env.REACT_APP_BACKEND_DOMAIN)

const Me = (props) => {

  const [trips, setTrips] = useState([]);
  useEffect(()=>{
    socket.emit('me');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  useEffect(()=>{
    if(props.user.userType !== 'traveller'){
      props.history.push('/em');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  useEffect(()=>{
    socket.on('meList', trips => {
      console.log(trips, 'he entrado')
    })
  })

  return (
    <div>
      
    </div>
  )
}

export default withAuth(Me)
