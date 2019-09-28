import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../../hoc/withAuth';

const Login = (props) =>  {
  const [user, setUser] = useState({
    email:'',
    password:''
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { email, password } = user;
    props.login({ email, password })
    .then()
    .catch( error => console.log(error) )
  }

  const handleChange = (event) => {  
    const {name, value} = event.target;
    setUser(
      {...user,[name]: value}
      );
  }

    return (
      <>
        <form onSubmit={(e)=>handleFormSubmit(e)}>
          <label htmlFor='email'>Email:</label>
          <input id='email' type='email' name='email' value={user.email} onChange={(e)=>handleChange(e)}/>
          <label htmlFor='password'>Password:</label>
          <input id='password' type='password' name='password' value={user.password} onChange={(e)=>handleChange(e)} />
          <input type='submit' value='Login' />
        </form>

        <p>You don't have an accout yet?
            <Link to={'/signup'}> Signup</Link>
        </p>
      </>
    )
}

export default withAuth(Login);