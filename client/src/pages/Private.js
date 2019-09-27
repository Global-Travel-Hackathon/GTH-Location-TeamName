import React, { Component } from 'react'
import { ReactComponent as WikiEm } from '../logotipo.svg'
import withAuth from '../hoc/withAuth.js';

class Private extends Component {
  render() {
    return (
      <div>
        <WikiEm className="logo"/>
        <h1>Welcome Paquito</h1>
      </div>
    )
  }
}

export default withAuth(Private);