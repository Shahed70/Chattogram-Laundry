import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import SideNav from "../Sidenav/SideNav";

const ManageService = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    axios
      .get("https://serene-coast-10697.herokuapp.com/getServices")
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const serviceDeleteHandler = (id) =>{
      axios.post(`https://serene-coast-10697.herokuapp.com/delService/${id}`)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
  }
  return (
    <div className="container-fluid px-0">
      <div className="row">
        <div className="col-md-2">
          <SideNav />
        </div>
        <div className="col-md-8 offset-1 mt-5 pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Service price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                services.map( service => 
                  (
                    <tr>
                      <td>{service.sName}</td>
                      <td className="pl-5">{service.sPrice}</td>
                      <td onClick={() =>serviceDeleteHandler(service._id)}><button className="btn btn-danger">Delete</button></td>
                    </tr>
                  ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
