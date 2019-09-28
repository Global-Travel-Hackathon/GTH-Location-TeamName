import React, { Component } from "react";
import { Link } from "react-router-dom";
import Tag from "../../components/tag/tag.component";
import sarma from "../../assets/sarma.jpg";
import stars from "../../assets/stars.png";
import "./city.component.css";

export default class City extends Component {
  constructor() {
    super();

    this.state = {
      tags: [
        {
          title: "restourant",
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
      ]
    };
  }

  render() {
    return (
      <div>
        <div className="overflow">
          <div className="container">
            <div className="btncustom">
              <div className="btn btn-primaryhome btnsize" to="/belgrade">
                BELGRADE
              </div>
            </div>
            <div className="row align-items-start mt-3">
              {this.state.tags.map(({ id, title }) => (
                <div className="col-0">
                  <Tag key={id} title={title} />
                </div>
              ))}
            </div>
            <div className="cardcontainer">
              <div className="card mt-4" style={{ width: 16 + "rem" }}>
                <Link
                  to="/company-preview"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img src={sarma} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Bakina Kuhinja</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="width">
                      <img src={stars} className="left" alt="..." />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
