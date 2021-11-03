import React, { useEffect } from "react";
import Common2 from "./Common2";
import applicationPic from "../images/application.png";

const Application = () => {
  // This scroll page at top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="web__div" data-aos="fade-up">
      <Common2
        name="Dynamic Android Application"
        data="A dynamic look Android Mobile Application with all of the features you need in any application for you and your organization using Flutter stunning features."
        note="All code will be HAND CODED"
        note2="What you will Get"
        tools="Flutter, Dart"
        result="Cross Platform Compatibility, Responsive Layout, Source Files Includes, 100% Original work, Custom Styling / Fonts / Font Awesome, Bootstrap, MD-Bootstrap Responsive"
        dehost="DEPLOY ON GOOGLE PLAY STORE WITH SOME EXTRA AMOUNT"
        imgsrc={applicationPic}
        visit="/contact"
        btname="Contact Now"
      />
    </div>
  );
};

export default Application;
