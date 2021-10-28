import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Website from "./components/Website";
import Graphic from "./components/Graphic";
import Digital from "./components/Digital";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Courses from "./components/Courses/Courses";
import CoursesDetails from "./components/Courses/CoursesDetails";
import Register from "./components/Courses/Register";

import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/website" component={Website} />
        <Route exact path="/social" component={Digital} />
        <Route exact path="/graphic" component={Graphic} />
        <Route exact path="/demo" component={Landing} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/coursesdetails" component={CoursesDetails} />
      </Switch>
      <Footer />
    </>
  );
};
export default App;
