import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../../hoc/withAuth.js';

class Signup extends Component {

  state = {
    name: '',
    surname: '',
    email: '',
    password: '',
    form: false,
    userType: null
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const surname = this.state.surname;
    const email = this.state.email;
    const password = this.state.password;
    const userType = this.state.userType;

    this.props.signup({ name, surname, email, password, userType })
      .then( (user) => {
        this.setState({
            name: '',
            surname: '',
            email: '',
            password: '',
            userType: '',
        });
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSelectUserType = (userType) => {
    this.setState({
      userType: userType,
      form: true
    })
  }


  render() {
    const { form, name, surname, email, password, userType } = this.state;
    console.log(this.state);
    
    return (
      <>
      {!form && userType === null ? 
        <section>
          <button onClick={() => this.handleSelectUserType('traveller')}>Traveller</button>
          <button onClick={() => this.handleSelectUserType('volunteer')}>Volunteer</button>
        </section>
        :
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor='name'>Name:</label>
          <input id='name' type='text' name='name' value={name} onChange={this.handleChange}/>
          <label htmlFor=''>Surname:</label>
          <input id='surname' type='text' name='surname' value={surname} onChange={this.handleChange}/>
          <label htmlFor=''>Email:</label>
          <input id='email' type='email' name='email' value={email} onChange={this.handleChange}/>
          <label htmlFor='password'>Password:</label>
          <input id='password' type='password' name='password' value={password} onChange={this.handleChange} />
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
}

export default withAuth(Signup);