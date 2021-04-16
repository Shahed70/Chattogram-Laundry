import React from "react";
import SideNav from "../Sidenav/SideNav";

const AddAdmin = () => {
  return (
    <div className="container-fluid px-0">
      <div className="row">
        <div className="col-md-2 mb-3">
          <SideNav />
        </div>
        <div className="col-md-6 offset-2">
          <form action="">
            <h1  className="pt-5">MAKE ADMIN</h1>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input type="email" name="" className="form-control" id="" />
            </div>
            <input className="btn btn-primary float-right" type="submit" value="ADD"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
