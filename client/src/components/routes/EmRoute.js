import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import withAuth from '../../hoc/withAuth';

const EmRoute = (props) => {
  const { isLoggedIn, render , ...rest} = props
  return (
    <>
    {isLoggedIn && props.user.userType === 'volunteer' ?  <Route render={render} {...rest}/> : <Redirect to="/me"/>}  
    </>
  )
}

export default withAuth(EmRoute)