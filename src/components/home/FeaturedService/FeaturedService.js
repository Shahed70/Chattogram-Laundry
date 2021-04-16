import React from "react";
import cloth from "../../../asset/cloth.jpg";
const FeaturedService = () => {
  return (
    <div className="">
      <div className="row mt-5 pt-5 px-5">
        <div className="col-md-6 pb-5">
          <h1 className="pt-4 pb-4">Let us take care your cloth</h1>
          <p className="text-justify lead">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste error
            incidunt necessitatibus eum voluptatibus minus nemo magnam repellat
            rerum iusto sequi, quod laboriosam provident, quo quam beatae vel,
            facere in sint quos labore earum modi esse velit. Culpa veritatis
            dolor blanditiis officia sequi, et quas, iure quaerat maiores, sit
            assumenda?
          </p>
          <button className="btn btn-primary">LEARN MORE</button>
        </div>
        <div className="col-md-6">
          <img className="img-fluid rounded" src={cloth} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedService;
