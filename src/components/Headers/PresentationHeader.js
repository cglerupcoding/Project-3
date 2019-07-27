/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core comments


  function PresentationHeader() {
    let pageHeader = React.createRef();
  
    // React.useEffect(() => {
    //   if (window.innerWidth > 991) {
    //     const updateScroll = () => {
    //       let windowScrollTop = window.pageYOffset / 3;
    //       pageHeader.current.style.transform =
    //         "translate3d(0," + windowScrollTop + "px,0)";
    //     };
    //     window.addEventListener("scroll", updateScroll);
    //     return function cleanup() {
    //       window.removeEventListener("scroll", updateScroll);
    //     };
    //   }
    // });
  
    return (
      <>
        <div
          className="page-header"
          ref={pageHeader}
          style={{
            backgroundImage:
              "url(" + require("assets/img/cover.jpg") + ")"
          }}
        >
          <div className="filter" />
          <div className="content-center">
            
          </div>
        </div>
      </>
    );
  }
  

export default PresentationHeader;
