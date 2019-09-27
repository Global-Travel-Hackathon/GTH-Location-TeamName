import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import withAuth from '../../hoc/withAuth';

const PrivateRoute = (props) => {
  const { isLoggedIn, render ,user, ...rest} = props
  return (
    <>
    {isLoggedIn && user.isActive ?  <Route render={render} {...rest}/> : <Redirect to="/login"/>}  
    </>
  )
}

export default withAuth(PrivateRoute)