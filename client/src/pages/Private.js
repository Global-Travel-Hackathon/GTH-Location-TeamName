import React, { Component } from 'react'
import withAuth from '../hoc/withAuth.js';

class Private extends Component {
  render() {
    return (
      <div>
        <h1>Welcome Paquito</h1>
      </div>
    )
  }
}

export default withAuth(Private);