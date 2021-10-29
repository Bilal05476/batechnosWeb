import React from "react";
import Homepage from "./Homepage";
import SData from "./SData";
import SCard from "./SCard";
import About from "./About";
import Testimonals from "./Testimonals";
import CompanyFacts from "./CompanyFacts";

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
          servicesVisit="/services"
          servicesbtn="Services"
          coursesbtn="Courses"
          coursesVisit="/courses"
        />
      </div>
      <About />
   
      <h3 className="text-center services__heading py-2" data-aos="fade-in">
        Meet Our Solutions For You
      </h3>
      <p className="subtitle text-center">
        Business Planning, Strategy, and Execution. <br /> A problem-solving
        philosophy that leads to products people actually want to use.
      </p>
 
      <div className="container-fluid mb-5" data-aos="fade-in">
        <div className="col-12 mx-auto">
          <div className="row">
            <div className="card-deck mx-auto py-3">
              {SData.map((val, ind) => {
                return (
                  <SCard
                    key={ind}
                    title={val.title}
                    text={val.text}
                    serviceVisit={val.service}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Testimonals />
      <CompanyFacts />
    </>
  );
};

export default Home1;
