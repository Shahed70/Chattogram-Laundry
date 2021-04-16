import React from 'react';
import UserNav from '../UserNav/UserNav';

const CustomerReview = () => {
    return (
        <div className="container-fluid px-0">
        <div className="row">
          <div className="col-md-2 mb-3">
            <UserNav />
          </div>
          <div className="col-md-6 offset-2 mt-5">
              <h1>ADD MORE SERVICE</h1>
            <form action="" className="mt-3">
                <div className="form-group">
                    <label htmlFor="">Service Name</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Service Description</label>
                    <textarea name="" className="form-control" id="" cols="30" rows="6"></textarea>
                </div>
                <div className="form-group">
                  <p>  <label htmlFor="">Service Image</label></p>
                    <input type="file"/>
                </div>
                <input className="btn btn-primary" type="submit" value="ADD"/>
            </form>
          </div>
        </div>
      </div>
    );
};

export default CustomerReview;