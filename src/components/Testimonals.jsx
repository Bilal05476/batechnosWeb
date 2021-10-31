import React from "react";
import "./Testimonals.css";
import TData from "./TData";
import TCard from "./TCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonals = () => {
  return (
    <div className="testimonals">
      <h3 className="text-center py-2 px-3" data-aos="fade-in">
        What They Said About Us
      </h3>
      <p className="px-3 text-center">
        Provide Business Planning, Strategy, and Execution. <br /> Our clients
        share valuable feedbacks for our work, and always enjoy our services.
      </p>
      <div className="container-fluid mb-5" data-aos="fade-in">
        <div className="testimonal-flex">
          {TData.map((val, ind) => {
            return (
              <>
                <TCard
                  key={ind}
                  name={val.name}
                  feedBack={val.feedBack}
                  service={val.service}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonals;
