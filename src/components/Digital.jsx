import React from 'react';
import Common4 from './Common4';
import digi from '../images/digi.png';

const Digital = () => {
    return (
        <div className="digi__div" data-aos="zoom-in">
        <Common4
        name='Why Choose Us '
        data="You'll be expecting good quality work from a social media marketer for your business. So, as being a social media marketer, our work is unique, we do provide the projects on its given time. We provide you a free demo of your work, customer satisfaction, extra favors, and we will be your guiding hand as well. We have been on this journey for 1 year and we have to provide the services worldwide to our customers."
        note2='What you will Get'
        lname1="Create A New Page Or Manage An Existing One." 
        lname2="Running An Advertising Campaign Under Your Budget."
        lname3="Creative Marketing Campaign Organic As Well As Paid Reach."
        lname4="Spam Monitoring Target Audience Research."
        lname5="Facebook And Instagram Page Optimization."
        lname6="Setup Appointment Massaging Creating And Promoting Social Content."
        lname7="Approaching New Clients."
        lname8="Writing A Long And Short Description Engaging Caption(Text With Each Post)."
        //lname9="Writing A Short And Long Description."
        lname9="Scheduling Or Posting."
        lname10="Call To Action Link To A Website For The Call To Action Required By Users."
        lname11="Shopify Integration."     
        lname12="Pixel Setup."
        lname13="Content Writing."
        lname14="Competitive Analysis."
        lname15="Keywords Research."
        imgsrc={digi} visit='/contact' btname='Contact Now' />
        </div>
    );
}

export default Digital;