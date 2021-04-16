import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="pt-5">
      <div className="row px-5 mt-5">
        <div className="col-md-3 text-center">
          <h3 className="text-center">Chattogram </h3>
          <p className="text-secondry">Laundry</p>
          <p className="text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
            dolores nulla ex quam in impedit delectus incidunt, beatae molestiae
            dolor, odio iusto! Illo distinctio molestias dolorem expedita enim.
            Praesentium veritatis ab cumque harum pariatur nesciunt quasi
            quaerat aperiam. Pariatur doloribus deserunt
          </p>
        </div>
        <div className="col-md-3 text-justify pl-4">
          <h3 className="">Our Blog</h3>
          <hr />
          <div className="blogs">
            <div className="">
              <a className="text-secondary" href="#">
                Wash today
              </a>
              <p className="text-primary">April 17 2021</p>
            </div>
            <div className="">
              <a className="text-secondary" href="#">
                Ordering a rinse is easy!
              </a>
              <p className="text-primary">April 17 2021</p>
            </div>
            <div className="">
              <a className="text-secondary" href="#">
                Don’t wait for cleaning until it’s too late!
              </a>
              <p className="text-primary">April 17 2021</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <h3>Services</h3>
          <hr />
          <p>
            {" "}
            <i className="fa fa-arrow-right"></i> Dry Clean Your Winter Coat
          </p>
          <p>
            {" "}
            <i className="fa fa-arrow-right"></i> Dry Clean
          </p>
          <p>
            {" "}
            <i className="fa fa-arrow-right"></i> Ironing Service
          </p>
          <p>
            {" "}
            <i className="fa fa-arrow-right"></i> Laundry
          </p>
          <p>
            {" "}
            <i className="fa fa-arrow-right"></i> Wash and Fold
          </p>
          <p>
            {" "}
            <i className="fa fa-arrow-right"></i> Laundry Chattogram
          </p>
        </div>
        <div className="col-md-3">
          <h3>Contact Info</h3>
          <hr />
          <h3>
            <i className="fa fa-phone pr-2"> </i> 01810232323
          </h3>
          <p>123, New Link Road, Chattogram 4000</p>
          <p>
            <a href="#">info@example.com.bd</a>
          </p>
          <div className="d-flex justify-content-around">
            <span>
              <i className="fab fa-facebook fa-2x"></i>
            </span>
            <span>
              <i className="fab fa-youtube fa-2x"></i>
            </span>
            <span>
              <i className="fab fa-twitter fa-2x"></i>
            </span>
            <span>
              <i className="fab fa-instagram fa-2x"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-dark text-light text-center mt-5">
        <p className="py-4">Copyright {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
