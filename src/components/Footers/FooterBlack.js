/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components

function FooterBlack() {
  return (
    <>
      <footer className="footer footer-black footer-white">
        <Container>
          <Row>
            <nav className="footer-nav">
              <ul>
                
                <li>
                  <a
                    href="http://blog.creative-tim.com/?ref=pkpr-black-footer"
                    target="_blank"
                    className="mr-1"
                  >
                                 Jr. San Martín N° 127, Tarapoto | (51) 042 566 359 | +1 804 477 5524 | 942 889 047 | 986 585 921
              ventas@fatimacamilainn.com | @fatimainnhotel

                  </a>
                </li>
                </ul>
            </nav>
            <div className="credits ml-auto">
              <span className="copyright">
                © {new Date().getFullYear()}
                , made with <i className="fa fa-heart heart" /> Team Gringo Loco
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlack;
