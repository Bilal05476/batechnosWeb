import React from "react";
import Homepage from "./Homepage";
import SData from "./SData";
import SCard from "./SCard";

const Home1 = () => {
  return (
    <>
      <div className="home1__div" data-aos="zoom-in">
        <Homepage
          name="Doing the right thing at the right time!"
          subtitle="Doing the right thing at the right time!
          Doing the right thing at the right time!
          Doing the right thing at the right time!
          Doing the right thing at the right time!
          Doing the right thing at the right time!
          Doing the right thing at the right time!
          Doing the right thing at the right time!
          Doing the right thing at the right time!"
          servicesVisit="#services"
          servicesbtn="Services"
          coursesbtn="Courses"
          coursesVisit="/courses"
        />
      </div>
      <br />
      <h3 className="text-center services__heading py-4" data-aos="fade-in">
        OUR SERVICES
      </h3>
      <br />
      <div className="container-fluid mb-5" data-aos="zoom-in">
        <div className="col-12 mx-auto">
          <div className="row">
            {SData.map((val, ind) => {
              return <SCard key={ind} title={val.title} text={val.text} />;
            })}
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Home1;
