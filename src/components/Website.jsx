import React, { useEffect } from "react";
import Common2 from "./Common2";
import Common3 from "./Common3";
import reactwebapp from "../images/reactwebapp.png";
import staticweb from "../images/staticweb.png";

const Website = () => {
  // This scroll page at top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="web__div" data-aos="fade-up">
      <Common2
        name="React Web App "
        data="A dynamic look React Single Page Web Application with all of the features you need in any website for you and your organization using React stunning features."
        note="All code will be HAND CODED"
        note2="What you will Get"
        tools="React JS, JavaScript, Html, CSS, Bootstrap, Material UI, Context API, Font Awesome, React-Bootstrap"
        result="Cross-Browser Compatibility, Responsive Layout, Source Files Includes, 100% Original work, Custom Styling / Fonts / Font Awesome, Bootstrap, MD-Bootstrap Responsive"
        dehost="DOMAIN AND HOSTING PROVIDE AS PER CUSTOMER NEED AND BUDGET"
        imgsrc={reactwebapp}
        visit="/contact"
        btname="Contact Now"
      />
      <Common3
        name="Static Responsive Web "
        data="A dynamic look Responsive Static Web with all of the basic features you need for startup website for you and your organization."
        note="All code will be HAND CODED"
        note2="What you will Get"
        tools="JavaScript, Html, CSS, Bootstrap, Font Awesome"
        result="Cross-Browser Compatibility, Responsive Layout, Source Files Includes, 100% Original work, Custom Styling / Fonts / Font Awesome, Bootstrap"
        dehost="DOMAIN AND HOSTING PROVIDE AS PER CUSTOMER NEED AND BUDGET"
        imgsrc={staticweb}
        visit="/contact"
        btname="Contact Now"
      />
    </div>
  );
};

export default Website;
