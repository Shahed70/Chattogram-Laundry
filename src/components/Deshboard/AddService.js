import axios from "axios";
import React, { useState } from "react";
import SideNav from "../Sidenav/SideNav";

const AddService = () => {
  const [services, setServices] = useState({
    sName:"",
    sPrice:"",
    sDesc:""
  })
 function handleSubmit(e){
    e.preventDefault();
    axios.post('https://serene-coast-10697.herokuapp.com/addService', (services))
      .then(res => console.log(res))
      .catch(err => console.log(err))
      e.target.reset();
 }
  console.log(services);
  return (
    <div className="container-fluid px-0 overflow-auto">
      <div className="row">
        <div className="col-md-2 mb-3">
          <SideNav />
        </div>
        <div className="col-md-6 offset-2 mt-5">
            <h1>ADD MORE SERVICE</h1>
          <form action="" className="mt-3" onSubmit={handleSubmit}>
              <div className="form-group">
                  <label htmlFor="">Service Name</label>
                  <input onChange={(e) => setServices({...services,[e.target.name]:e.target.value})} name="sName" type="text" className="form-control"/>
              </div>
              <div className="form-group">
                  <label htmlFor="">Service Price</label>
                  <input onChange={(e) => setServices({...services,[e.target.name]:e.target.value})} name="sPrice" type="text" className="form-control"/>
              </div>
              <div className="form-group">
                  <label htmlFor="">Service Description</label>
                  <textarea onChange={(e) => setServices({...services,[e.target.name]:e.target.value})} name="sDesc" className="form-control" id="" cols="30" rows="5"></textarea>
              </div>
              <div className="form-group">
                <p>  <label htmlFor="">Service Image</label></p>
                  <input type="file"/>
              </div>
              <input className="btn btn-primary" type="submit" value="ADD SERVICE"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
