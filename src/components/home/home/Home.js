import React from "react";
import Navbar from "../Navbar/Navbar";
import Service from "../Service/Service";
import './Home.css'
import HeroVideo from "./HeroVideo/HeroVideo";
import FeaturedService from "../FeaturedService/FeaturedService";
import Testimonial from "../Testimonial/Testimonial";
import HowServiceWorks from "../howWorks/HowServiceWorks";
import ContactForm from "../contactForm/ContactForm";
import Footer from "../../Footer/Footer";
const Home = () => {
  return (
    <div className="container-fluid px-0 mx-0">
      <Navbar />
      <div className="">
        <div className="row home-hero px-5 mb-5">
        <div className="overlay"></div>
          <div className="col-md-6">
              <div className="hero-left mt-5 pt-5">
              <h1 className="display-4 d-flex justify-content-center align-items-center text-white px-2">Start Your Day With A Clean Cloth</h1>
            <p className="text-white lead pt-5">WE WILL DELIVER BACK TO YOU, ANYTIME AND ANYWHER</p>
            <button className="btn btn-primary btn-lg mt-5 ">ORDER NOW</button>
              </div>
          </div>
          <div className="col-md-6">
            <div className="hero-right mt-5 pt-5">
              <HeroVideo />
            </div>
          </div>
        </div>
        <Service />
        <HowServiceWorks />
        <FeaturedService />
        <Testimonial />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
