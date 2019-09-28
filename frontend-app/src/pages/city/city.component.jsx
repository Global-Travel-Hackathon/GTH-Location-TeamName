import React, { Component } from "react";
import Card from '../../components/card/card.component';
import Tag from "../../components/tag/tag.component";
import {Link} from 'react-router-dom';

import "./city.component.css";

export default class City extends Component {
  constructor() {
    super();

    this.state = {
      tags: [
        {
          title: "restaurant",
          id: 1,
          checked: true
        },
        {
          title: "food",
          id: 2,
          checked: false
        },
        {
          title: "folk",
          id: 3,
          checked: false
        },
        {
          title: "womens",
          id: 4,
          checked: false
        },
        {
          title: "mens",
          id: 5,
          checked: false
        }
      ],
      companies:[
          {
              title: 'Bakina Kuhinja',
              description: 'A quick description for restorants and stuff',
              id: 1,
              imageUrl: 'https://coolinarika.azureedge.net/images/_variations/9/c/9c924e010ccaed50415e25c96877bb39_view_l.jpg?v=0'
          },
          {
            title: 'Tea House',
            description: 'A quick description for restorants and stuff',
            id: 2,
            imageUrl: 'https://cdn.pixabay.com/photo/2014/12/04/15/21/tea-556777__340.jpg'
        },
        {
            title: 'Pastry Shop',
            description: 'A quick description for restorants and stuff',
            id: 3,
            imageUrl: 'https://cdn.pixabay.com/photo/2016/11/29/05/07/baked-goods-1867459_960_720.jpg'
        },
        {
            title: 'Handmade Souvenirs',
            description: 'A quick description for restorants and stuff',
            id: 4,
            imageUrl: 'https://cdn.pixabay.com/photo/2019/05/05/18/58/girl-4181395_960_720.jpg'
        },
        {
            title: 'Cookie Shop',
            description: 'A quick description for restorants and stuff',
            id: 5,
            imageUrl: 'https://cdn.pixabay.com/photo/2017/12/01/16/14/cinnamon-stars-2991174_960_720.jpg'
        },
          
      ]
    };
  }

  render() {
    return (
      <div>
        <div className="overflow">
          <div className="container">
          <div className='btncustom'>
                        <div class="dropdown">
                        <button class="btn btn-primaryhome btnsize dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Belgrade
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link class="dropdown-item" to='/belgrade' role="button">Novi Sad</Link>
                            <Link class="dropdown-item" to='/belgrade' role="button">Another city</Link>
                            <Link class="dropdown-item" to='/belgrade' role="button">Another city#2</Link>
                        </div>
                        </div></div>
            <div className="row align-items-start mt-3">
              {this.state.tags.map(({ id, title }) => (
                <div className="col-0">
                  <Tag key={id} title={title} />
                </div>
              ))}
            </div>
                <div className='row'>
                    {this.state.companies.map(({id, title, imageUrl, description}) => (
                        <div className='ml-2 mr-2' data-aos="zoom-in-down"  data-aos-duration="1000">
                        <Card key={id} title={title} imgUrl={imageUrl} description={description}/>
                        </div>
                    ))}

                </div>
            
          </div>
        </div>
      </div>
    );
  }
}
