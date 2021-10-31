import React from "react";
import "./Testimonals.css";
import TData from "./TData";
import TCard from "./TCard";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonals = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //   ],
  // };
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
        <div className="col-12">
          <div className="row">
            <div className="card-deck testimonal-deck mx-auto py-3">
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
      </div>
    </div>
  );
};

export default Testimonals;
