import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { CreactUserContext } from '../../../App';
import UserNav from '../UserNav/UserNav';

const CustomerReview = () => {
  const [loggedInUser] = useContext(CreactUserContext)
  const [review, setReview] = useState({
    name:"",
    designation:"",
    feedback:"",
    range:"",
  })
 const submitHandler = (e) => {
   const newItem = {...review}
   newItem.img = loggedInUser.img
   setReview(newItem)
   e.preventDefault()
   axios.post("http://localhost:4000/setReview/", (review))
   .then(res => {
     console.log(res);
   })
   .catch(err => console.log(err))
   e.target.reset()
 }
    return (
        <div className="container-fluid px-0">
        <div className="row">
          <div className="col-md-2 mb-3">
            <UserNav />
          </div>
          <div className="col-md-6 offset-2 mt-5">
              <h1>REVIEW</h1>
            <form action="" className="mt-3" onSubmit={submitHandler}>
                <div className="form-group">
                    <input name="name" required type="text" onChange={(e) => setReview({...review, [e.target.name]:e.target.value})}  className="form-control" placeholder="Your Name*"/>
                </div>
                <div className="form-group">
                    <input name="designation" required type="text" onChange={(e) => setReview({...review, [e.target.name]:e.target.value})} className="form-control" placeholder="Your Designation*"/>
                </div>
                <div className="form-group">
                    <input name="range" required type="range" min="1" max="5" onChange={(e) => setReview({...review, [e.target.name]:e.target.value})} className="form-control" placeholder="Your Designation*"/>
                    <p className="text-center my-2 py-2 rounded">{review.range=== ""? "5": review.range}</p>
                </div>
                <div className="form-group">
                  <textarea className="form-control" required placeholder="Your feedback*" onChange={(e) => setReview({...review, [e.target.name]:e.target.value})} name="feedback" id="" cols="30" rows="4"></textarea>
                </div>
                <input className="btn btn-primary" type="submit" value="ADD REVIEW"/>
            </form>
          </div>
        </div>
      </div>
    );
};

export default CustomerReview;