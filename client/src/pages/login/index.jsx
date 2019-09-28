import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as WikiEm } from '../../logotipo.svg'
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
        <div className="login">
          <WikiEm className="logo"/>
          <div className="login-content">
            <p className="title">LOG IN</p>
            <form className="login-form" onSubmit={(e)=>handleFormSubmit(e)}>
              <label className="label" htmlFor='email'>Email</label>
              <input className="input" id='email' type='email' name='email' value={user.email} onChange={(e)=>handleChange(e)}/>
              <label htmlFor='password'>Password</label>
              <input className="input" id='password' type='password' name='password' value={user.password} onChange={(e)=>handleChange(e)} />
              <button className="button-submit">
                <input className="button-title" type='submit' value='LOG IN' />
              </button>
            </form>
            <div>
              <p>You don't have an accout yet?
                  <Link className="small-title" to={'/signup'}>SIGN UP</Link>
              </p>
            </div>
          </div>
        </div>
      </>
    )
}

export default withAuth(Login);