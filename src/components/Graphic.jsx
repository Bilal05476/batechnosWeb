import React from "react";
import Common4 from "./Common4";
import graph from "../images/graph.png";

const Graphic = () => {
  return (
    <div className="graph__div" data-aos="fade-in">
      <Common4
        name="Why Choose Us "
        data="Graphic designing has a crucial role in your business strategy. Your company logo determines your corporate identity and this is the first and foremost thing customers will notice to analyze your business image. Same goes for your brochures, business cards, flyers, letterheads, newsletters, these all define the overall image of your business or company."
        note2="What you will Get"
        lName={[
          "logo Designing.",
          "Business Card.",
          "ID Card.",
          "Letterhead.",
          "Envelope.",
          "Flyer Front Back.",
          "Poster.",
          "Tri Fold Brochure.",
          "Facebook Post.",
          "Facebook Cover.",
          "Buntings.",
          "Web Mockup.",
          "Pixel Setup.",
          "Folded Product Packaging.",
          "Stationery Design.",
        ]}
        imgSrc={graph}
        visit="/contact"
        btName="Contact Now"
      />
    </div>
  );
};

export default Graphic;
