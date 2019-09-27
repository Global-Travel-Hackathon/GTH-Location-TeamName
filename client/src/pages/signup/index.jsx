import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../../hoc/withAuth.js';

class Signup extends Component {

  state = {
    name: '',
    surname: '',
    email: '',
    password: '',
    need1: false,
    need2: false,
    need3: false,
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const surname = this.state.surname;
    const email = this.state.email;
    const password = this.state.password;


    this.props.signup({ name, surname, email, password })
      .then( (user) => {
        this.setState({
            name: '',
            surname: '',
            email: '',
            password: '',
            
        });
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }


  render() {
    const { name, surname, email, password,} = this.state;
    return (
      <>
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
          {/* <section id='needs'>
            <button id='need1' name='need1' value={!need1} onClick={this.handleChange}>Need 1</button>
            <button id='need2' name='need2' value={!need2} onClick={this.handleChange}>Need 2</button>
            <button id='need3' name='need3' value={!need3} onClick={this.handleChange}>Need 3</button>
          </section> */}
          <input type='submit' value='Signup' /> 
        </form>

        <p>Already have account? 
          <Link to={'/login'}> Login</Link>
        </p>

      </>
    )
  }
}

export default withAuth(Signup);