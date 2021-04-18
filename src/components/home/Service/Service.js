import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./Service.css";

const Service = () => {
  const history = useHistory();
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/getServices")
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="services">
      <div className="row services-title mx-5">
        <div className="col-md-12 col-sm-12">
          <h1 className="text-center py-5 mb-4">What We Do For You</h1>
        </div>
      </div>
      <div className="row services-row px-5">
        {services.map((service) => (
          <div key={service._id} className="col-md-4 mb-5">
            <div
              onClick={() => history.push(`/userdeshboard/${service._id}`)}
              className="service-card card card-body text-center  p-4"
            >
              <h1>{service.sName}</h1>
              <p className="lead pt-3">{service.sDesc}</p>
              <h5 className="price text-danger">
                $ <span>{service.sPrice}</span>
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
