import React from 'react';
import SideNav from '../Sidenav/SideNav';

const ManageService = () => {
    return (
        <div className="container-fluid px-0">
        <div className="row">
          <div className="col-md-2">
            <SideNav />
          </div>
          <div className="col-md-8 offset-1">
            <h1>This is order list</h1>
          </div>
        </div>
      </div>
    );
};

export default ManageService;