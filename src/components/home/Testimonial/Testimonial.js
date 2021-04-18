import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import './Testimonial.css'

const Testimonial = () => {
  const [reviews, setReview] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:4000/getReview')
    .then(res => {
      setReview(res.data)
    }).catch(err => console.log(err))
  },[])
  return (
    <div>
      <h1 className="mt-5 pt-4 text-center ">What Our Customer Say</h1>
      <div className="row my-5 py-5 px-5">
              {
                reviews.map(review => (
                  <>
                  
                  <div className="col-md-4 mb-5" key={review.name}>
                    <div className="card review-card card-body p-4">
                      <div className="d-flex">
                        <img className="img-fluid" style={{  width:"70px", height:"70px", borderRadius:"50%"}} src={review.img} alt="" />
                        <div className="reviw-item pl-3">
                          <h5>{review.name}</h5>
                        <h5>{review.designation}</h5>
                      </div>
                    </div>
                      <p>{review.feedback}</p>
                      <div className="product-rating text-warning text-center">
                     {Array(parseInt(review.range)).fill().map((_, i)=>(
                           <p class="fa fa-star checked"></p>
                     ))}
                     
                 </div>
                </div>
              </div>
                  </>
                ))
              }
      </div>
    </div>
  );
};

export default Testimonial;
