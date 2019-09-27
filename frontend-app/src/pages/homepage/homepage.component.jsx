import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Link class="btn btn-primary" to='/belgrade' role="button">Where to?</Link>
            </div>
        )
    }
}
