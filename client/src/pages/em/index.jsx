import React, { useState, useEffect } from 'react'
import withAuth from '../../hoc/withAuth'

const Em = (props) => {
  useEffect(()=>{
    if(props.user.userType !== 'volunteer'){
      props.history.push('/me');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div>
      
    </div>
  )
}

export default withAuth(Em)
