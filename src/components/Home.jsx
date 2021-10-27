import React from "react";
import Homepage from "./Homepage";
import SData from "./SData";
import SCard from "./SCard";

const Home1 = () => {
  return (
    <>
      <div className="home1__div" data-aos="fade-in">
        <Homepage
          name="Doing the right thing at the right time!"
          subtitle="Every successful digital journey starts with Graphics, Development, and Marketing. 
          B-A TECHNOS provides a One-stop solution to our Foreign and Local clients to facelift their Brands. 
          We made technology simple for you and adapt reliable, easy, and innovative ideas. 
          Better design with easy navigation for stubborn marketing. So what are you waiting for?"
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
