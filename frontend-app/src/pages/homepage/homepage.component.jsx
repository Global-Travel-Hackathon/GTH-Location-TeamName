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
                        <div className="dropdown">
                        <button className="btn btn-primaryhome btnsize dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Where to?
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to='/belgrade' role="button">Belgrade</Link>
                            <Link className="dropdown-item" to='/belgrade' role="button">Another city</Link>
                            <Link className="dropdown-item" to='/belgrade' role="button">Another city#2</Link>
                        </div>
                        </div>


                    </div>
                    
                    <h1 className='socialcircle' data-aos="fade-right" data-aos-duration="3000">THE SOCIAL <br/>CIRCLE</h1>
                        <p className='pedit'>
                        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
                        excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui 
                        officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem 
                        rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est 
                        eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus"
                        </p>

                    <img className='offset-md-6 bottom overflow-y' data-aos="fade-down" data-aos-duration="2000" src={imageUrl} alt='logo'/>
                </div>
            </div>
        )
    }
    
}
