import React from 'react';
import Common from './Common';
import web from '../images/homeimage.png';
import CData from './CData';
import Card from './Card';

const About = () => {
  return (
    <div className="about__div" data-aos="zoom-in">
    <Common 
    name='Welcome to About page of'
    subtitle='All you need to know About us! '
    imgsrc={web} visit='/contact' btname='Contact Now' businessName=' BaTechnos'
    />
    <br /><h3 className="text-center services__heading">ABOUT US</h3><br />
    <div className="container-fluid mb-5" data-aos="ease-in">
      <div className="col-12 mx-auto">
        <div className="row">
          {
            CData.map((val, ind) =>{
              return <Card key= {ind}
              title = {val.title}
              text = {val.text}
              />
            })
          }
        </div>
      </div>
    </div>
    <br />
    </div>
  );
}

export default About;
