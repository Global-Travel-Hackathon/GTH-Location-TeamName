import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import imageUrl from '../../assets/landing.png';
import './homepage.css';

export default class Homepage extends Component {
    
    render() {
        return (
            <div className='overflow'>
                <div className='container'>
                    <div className='btncustom'>
                        <Link className="btn btn-primaryhome btnsize" to='/belgrade' role="button">Where to?</Link>
                    </div>
                    <h1 className='socialcircle'>THE SOCIAL <br/>CIRCLE</h1>
                        <p className='pedit'>
                        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
                        excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui 
                        officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem 
                        rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est 
                        eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus"
                        </p>

                    <img className='offset-md-6 bottom' src={imageUrl} alt='logo'/>
                </div>
            </div>
        )
    }
    
}