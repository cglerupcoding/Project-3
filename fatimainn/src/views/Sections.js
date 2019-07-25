import React from "react";
// reactstrap components

// core components
import WhiteNavbar from "components/Navbars/WhiteNavbar.js";
import FooterBlack from "components/Footers/FooterBlack.js";
// sections for this page
// import SectionHeader from "./sections-sections/SectionHeader.js";
import SectionPricing from "./sections-sections/SectionPricing.js";

function Sections() {

  return (
    <>
      <WhiteNavbar />
 
      {/* <SectionHeader /> */}
      <SectionPricing />
      <FooterBlack />
    </>
  );
}

export default Sections;
