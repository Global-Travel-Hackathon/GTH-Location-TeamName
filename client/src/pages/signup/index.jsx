import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../../hoc/withAuth.js';

const Signup = (props) => {

  const [user,setUser] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    form: false,
    userType: null
  })
  

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const {name, surname, email, password, userType} = user

    props.signup({ name, surname, email, password, userType })
      .then(() => {
        setUser({
            name: '',
            surname: '',
            email: '',
            password: '',
            userType: '',
        });
      })
      .catch( error => console.log(error) )
  }

  const handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  const handleSelectUserType = (userType) => {
    this.setState({
      userType: userType,
      form: true
    })
  }



    const { form, name, surname, email, password, userType } = this.state;
    console.log(this.state);
    
    return (
      <>
      {!form && userType === null ? 
        <section>
          <button onClick={() => handleSelectUserType('traveller')}>Traveller</button>
          <button onClick={() => handleSelectUserType('volunteer')}>Volunteer</button>
        </section>
        :
        <form onSubmit={(e)=>handleFormSubmit(e)}>
          <label htmlFor='name'>Name:</label>
          <input id='name' type='text' name='name' value={name} onChange={(e)=>handleChange(e)}/>
          <label htmlFor=''>Surname:</label>
          <input id='surname' type='text' name='surname' value={surname} onChange={(e)=>handleChange(e)}/>
          <label htmlFor=''>Email:</label>
          <input id='email' type='email' name='email' value={email} onChange={(e)=>handleChange(e)}/>
          <label htmlFor='password'>Password:</label>
          <input id='password' type='password' name='password' value={password} onChange={(e)=>handleChange(e)} />
          <label htmlFor='needs'>What's your needs:</label>
          <input type='submit' value='Signup' /> 
        </form>
      }
        <p>Already have account? 
          <Link to={'/login'}> Login</Link>
        </p>

      </>
    )
  
}

export default withAuth(Signup);