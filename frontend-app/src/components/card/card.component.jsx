import React from 'react';
import { Link } from "react-router-dom";
import stars from "../../assets/stars.png";
import './card.component.css'

const Card = ({imgUrl, title, description}) => (
        <div className="cardcontainer">
        <div className="card mt-4" style={{ width: 16 + "rem" }}>
          <Link
            to="/company-preview"
            style={{ textDecoration: "none", color: "black" }}
          >
            <img src={imgUrl} className="card-img-top imgheight" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                {description}
              </p>
              <div className="width">
                <img src={stars} className="left" alt="..." />
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
export default Card;