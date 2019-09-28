import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import withAuth from '../../hoc/withAuth';

const MeRoute = (props) => {
  const { isLoggedIn, render , ...rest} = props
  return (
    <>
    {isLoggedIn && props.user.userType === 'traveller' ?  <Route render={render} {...rest}/> : <Redirect to="/em"/>}  
    </>
  )
}

export default withAuth(MeRoute)