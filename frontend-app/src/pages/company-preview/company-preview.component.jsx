import React, { Component } from "react";
import sarma from "../../assets/sarma.jpg";
import stars from "../../assets/stars.png";
import "./company-preview.css";

export default class CompanyPreview extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">IME</div>
          <div className="col-4">
            <div className="btn btn-primarytag tagsize w-100 mt-4 mb-3">
              Write a review
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner height">
                <div class="carousel-item active">
                  <img class="d-block w-100" src={sarma} alt="First slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src={sarma} alt="Second slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src={sarma} alt="Third slide" />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-4"><div class="card">
  <div class="card-header">
    Great personnel <span><div className="width">
                      <img src={stars} className="star-left" alt="..." />
                    </div></span>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">The best <span><div className="width">
                      <img src={stars} className="star-left" alt="..." />
                    </div></span></li>
    <li class="list-group-item">Amazing food <span><div className="width">
                      <img src={stars} className="star-left" alt="..." />
                    </div></span></li>
    <li class="list-group-item">Cool place <span><div className="width">
                      <img src={stars} className="star-left" alt="..." />
                    </div></span></li>
  </ul>
</div></div>
        </div>
        <div className="row">
          <div className="col-8">WHAT WE DO AND WHY</div>
          <div className="col-4">MAP</div>
        </div>
      </div>
    );
  }
}
