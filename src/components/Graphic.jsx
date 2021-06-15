import React from 'react';
import Common4 from './Common4';
import graph from '../images/graph.png';

const Graphic = () => {
    return (
        <div className="graph__div" data-aos="zoom-in">
        <Common4
        name='Why Choose Us '
        data="Graphic designing has a crucial role in your business strategy. Your company logo determines your corporate identity and this is the first and foremost thing customers will notice to analyze your business image. Same goes for your brochures, business cards, flyers, letterheads, newsletters, these all define the overall image of your business or company."
        note2='What you will Get'
        lname1="logo Designing." 
        lname2="Business Card."
        lname3="ID Card."
        lname4="Letterhead."
        lname5="Envelope."
        lname6="Flyer Front Back."
        lname7="Poster."
        lname8="Tri Fold Brochure."
        lname9="Facebook Post."
        lname10="Facebook Cover."
        lname11="Buntings."
        lname12="Web Mockup."     
        lname13="Pixel Setup."
        lname14="Folded Product Packaging."
        lname15="Stationery Design."
        imgsrc={graph} visit='/contact' btname='Contact Now' />
        </div>
    );
}

export default Graphic;