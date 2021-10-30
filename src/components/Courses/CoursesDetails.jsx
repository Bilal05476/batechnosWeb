import React, { useEffect } from "react";
import Common2 from "../Common2";
import Common3 from "../Common3";
import reactwebapp from "../../images/reactwebapp.png";
import staticweb from "../../images/staticweb.png";
import python from "../../images/python.png";
const CoursesDetails = () => {
  // This scroll page at top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="web__div" data-aos="fade-in">
      <Common3
        name="Static Website Development"
        data="This course for absolute beginners who don't know anything about website development. In this course, we cover all the basic fundamentals of website development and responsive development as well."
        note="PREREQUISITES"
        note2="What you will Learn"
        tools="Eager to Learn (Level: Beginner)"
        result="Project base Course, Website from absolute scratch, Responsive Website, Custom Styling / Fonts / Font Awesome, Bootstrap, JavaScript and its use!"
        dehost="FOR BEGINNER 3 MONTHS COURSE"
        imgsrc={staticweb}
        visit="/register"
        btname="Register Now"
        conhead="Course Content"
        content="Html5, Css3, JavaScript, Media Queries, Bootstrap, FontAwesome, Github, Firebase, Netlify"
      />
      <Common2
        name="React Web Applications"
        data="This course for the intermediate level who knows about the static website development building process. In this course, we cover all the basic and advanced fundamentals of website development with ReactJs. And Concentrate on Single Page and Progressive Web App with ReatcJS."
        note="PREREQUISITES"
        note2="What you will Learn"
        tools="Html, CSS, Bootstrap, JavaScript (Level: Intermediate)"
        result="Project base Course, Website with ReactJS, Signle Page Applications"
        dehost="FOR INTERMEDIATE 3+ MONTHS COURSE"
        warning="Please Don't Apply for this Course if you don't have enough knowledge about JavaScript ES6"
        imgsrc={reactwebapp}
        visit="/register"
        btname="Register Now"
        conhead="Course Content"
        content="JavaScript, ReactJs, Material Ui, Redux, Next.js, Firebase, Netlify"
      />
      <Common3
        name="Python Programming"
        data="This course for absolute beginners who don't know anything about programming. In this course, we cover all the basic to advance fundamentals of python programming and make some projects as well."
        note="PREREQUISITES"
        note2="What you will Learn"
        tools="Basic knowledge of maths (Level: Beginner)"
        result="Project base Course, Python with CRUD Sql database, Python and its use!"
        dehost="FOR BEGINNER 3 MONTHS COURSE"
        imgsrc={python}
        visit="/register"
        btname="Register Now"
        conhead="Course Content"
        content="Python, Sql Database"
      />
    </div>
  );
};

export default CoursesDetails;
