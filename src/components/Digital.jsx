import React, { useEffect } from "react";
import Common4 from "./Common4";
import digi from "../images/digi.png";

const Digital = () => {
  // This scroll page at top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="digi__div" data-aos="zoom-in">
      <Common4
        name="Why Choose Us "
        data="You'll be expecting good quality work from a social media marketer for your business. So, as being a social media marketer, our work is unique, we do provide the projects on its given time. We provide you a free demo of your work, customer satisfaction, extra favors, and we will be your guiding hand as well. We have been on this journey for 1 year and we have to provide the services worldwide to our customers."
        note2="What you will Get"
        lName={[
          "Create A New Page Or Manage An Existing One.",
          "Running An Advertising Campaign Under Your Budget.",
          "Creative Marketing Campaign Organic As Well As Paid Reach.",
          "Spam Monitoring Target Audience Research.",
          "Facebook And Instagram Page Optimization.",
          "Setup Appointment Massaging Creating And Promoting Social Content.",
          "Approaching New Clients.",
          "Writing A Long And Short Description Engaging Caption(Text With Each Post).",
          "Scheduling Or Posting.",
          "Call To Action Link To A Website For The Call To Action Required By Users.",
          "Shopify Integration.",
          "Pixel Setup.",
          "Content Writing.",
          "Competitive Analysis.",
          "Keywords Research.",
        ]}
        imgSrc={digi}
        visit="/contact"
        btName="Contact Now"
      />
    </div>
  );
};

export default Digital;
