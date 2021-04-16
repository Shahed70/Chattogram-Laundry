import React from "react";

const ContactForm = () => {
  return (
    <div>
      <div className="row py-5 bg-dark">
          <div className="col-md-8 offset-2">
              <h1 className="text-center text-white py-5">Get In Touch</h1>
              <form action="">
                  <div className="form-group">
                      <input placeholder="Your Name" type="text" className="form-control"/>
                  </div>
                  <div className="form-group">
                      <input placeholder="Your Email" type="text" className="form-control"/>
                  </div>
                  <div className="form-group">
                      <textarea placeholder="Your Message" name="" className="form-control" id="" cols="30" rows="10"></textarea>
                  </div>
                  <button className="btn btn-primary btn-block mt-3">SEND</button>
              </form>
          </div>
      </div>
    </div>
  );
};

export default ContactForm;
