import React, { Component } from "react";
import sarma from "../../assets/sarma.jpg";
import stars from "../../assets/stars.png";
import location from "../../assets/location.png";
import phone from "../../assets/phone.png";
import gmap from "../../assets/map.png";
import "./company-preview.css";

export default class CompanyPreview extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h4 className="mt-3">Bakina Kuhinja</h4>
            <a href='www.bakinakuhinja.com'><p className='p-size site-size mb-1'>www.bakinakuhinja.com</p></a>
            <img src={stars} className="starsize" alt="..." />
            <span>
              <img src={location} className="starsize ml-3" alt="..." />
              <span className="p-size ml-1">
                Nova Iskra creative hub 43 Gavrila Principa 11000 Beograd Serbia
              </span>
            <img src={phone} className="starsize ml-3" alt="..." />
            <span className="p-size ml-1">
              +381 61 111 11 11
            </span>
            </span>
           
            <p>Very very nice description</p>
          </div>
          <div className="col-4">
            <div className="btn btn-primarytag tagsize w-100 mt-5 mb-1">
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
                  <img class="d-block w-100" src={'https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberry-2023404__340.jpg'} alt="Second slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src={'https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063__340.jpg'} alt="Third slide" />
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
          <div className="col-4">
            <div class="card">
              <div class="card-header">
                Great personnel{" "}
                <span>
                  <div className="width">
                    <img src={stars} className="star-left" alt="..." />
                    <p className="star-left  auth-margin">Suzana</p>
                  </div>
                </span>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  The best{" "}
                  <span>
                    <div className="width">
                      <img src={stars} className="star-left" alt="..." />
                      <p className="star-left  auth-margin">Sandra</p>
                    </div>
                  </span>
                </li>
                <li class="list-group-item">
                  Amazing food{" "}
                  <span>
                    <div className="width">
                      <img src={stars} className="star-left" alt="..." />
                      <p className="star-left  auth-margin">Paul</p>
                    </div>
                  </span>
                </li>
                <li class="list-group-item">
                  Cool place{" "}
                  <span>
                    <div className="width">
                      <img src={stars} className="star-left" alt="..." />
                      <p className="star-left  auth-margin">Strahinja</p>
                    </div>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-8">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="col-4">
            <img class="d-block w-100" src={gmap} alt="First slide" />
          </div>
        </div>
      </div>
    );
  }
}
