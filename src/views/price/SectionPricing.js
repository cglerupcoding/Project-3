import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SectionPricing() {
  const [activePill, setActivePill] = React.useState("1");
  // pills for the last pricing
  const [pillActive, setPillActive] = React.useState("personal");
  return (
    <>
      <div className="section section-pricing cd-section" id="pricing">

     
        <div className="pricing-2">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Explore our Rooms</h2>

                <Nav className="nav-pills-danger justify-content-center" pills>
                  <NavItem>
                    <NavLink
                      className={activePill === "1" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        setActivePill("1");
                      }}
                    >
                    Económica
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activePill === "2" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        setActivePill("2");
                      }}
                    >
                    Superior
                    </NavLink>
                  </NavItem>
                </Nav>
                {/* Pill panes */}
                <TabContent activeTab={"pill-" + activePill}>
                  <TabPane tabId={"pill-" + activePill} />
                  <TabPane tabId={"pill-" + activePill} />
                </TabContent>
              </Col>
            </Row>
            <div className="space-top" />
            <Row>
              <Col md="4">
                <Card
                  className="card-pricing"
                  data-background="image"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/price/1.jpg") +
                      ")"
                  }}
                >
                  <CardBody>
                    <h6 className="card-category">Individual Económica</h6>
                    <CardTitle tag="h1">
                      <small>S/.</small>80 <small>/night</small>
                    </CardTitle>
                    <ul>
                      <li>
                        <b>•</b> Ventilador
                      </li>
                      <li>
                        <b>•</b> Desayuno Continental
                      </li>
                      <li>
                        <b>•</b> WiFi grati
                      </li>
                      <li>
                        <b>•</b> Taxi de recojo
                      </li>
                    </ul>
                    <Button
                      className="btn-round"
                      color="warning"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Get Started
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card
                  className="card-pricing"
                  data-background="image"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/price/2.jpg") +
                      ")"
                  }}
                >
                  <CardBody>
                    <h6 className="card-category">Individual Superior</h6>
                    <CardTitle tag="h1">
                      <small>S/.</small>95 <small>/night</small>
                    </CardTitle>
                    <ul>
                      <li>
                        <b>•</b> Aire Acondicionado
                      </li>
                      <li>
                        <b>•</b> Desayuno Continental
                      </li>
                      <li>
                        <b>•</b> WiFi grati
                      </li>
                      <li>
                        <b>•</b> Taxi de recojo
                      </li>
                    </ul>
                    <Button
                      className="btn-round"
                      color="success"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Get Started
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card
                  className="card-pricing"
                  data-background="image"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/price/3.JPG") +
                      ")"
                  }}
                >                >
                <CardBody>
                    <h6 className="card-category">Matrimonial Económica</h6>
                    <CardTitle tag="h1">
                      <small>S/.</small>100 <small>/night</small>
                    </CardTitle>
                    <ul>
                      <li>
                        <b>•</b> Ventilador
                      </li>
                      <li>
                        <b>•</b> Desayuno Continental
                      </li>
                      <li>
                        <b>•</b> WiFi grati
                      </li>
                      <li>
                        <b>•</b> Taxi de recojo
                      </li>
                    </ul>            
                  <Button
                    className="btn-round"
                    color="success"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Get Started
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card
                className="card-pricing"
                data-background="image"
                style={{
                  backgroundImage:
                    "url(" +
                    require("assets/img/price/4.JPG") +
                    ")"
                }}
              >
                                <CardBody>
                    <h6 className="card-category">Matrimonial Superior</h6>
                    <CardTitle tag="h1">
                      <small>S/.</small>120 <small>/night</small>
                    </CardTitle>
                    <ul>
                      <li>
                        <b>•</b> Aire Acondicionado
                      </li>
                      <li>
                        <b>•</b> Desayuno Continental
                      </li>
                      <li>
                        <b>•</b> WiFi grati
                      </li>
                      <li>
                        <b>•</b> Taxi de recojo
                      </li>
                    </ul>            
                  <Button
                    className="btn-round"
                    color="success"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Get Started
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card
                className="card-pricing"
                data-background="image"
                style={{
                  backgroundImage:
                    "url(" +
                    require("assets/img/price/5.JPG") +
                    ")"
                }}
              >
                                <CardBody>
                    <h6 className="card-category">2 Camas Económica</h6>
                    <CardTitle tag="h1">
                      <small>S/.</small>110 <small>/night</small>
                    </CardTitle>
                    <ul>
                      <li>
                        <b>•</b> Ventilador
                      </li>
                      <li>
                        <b>•</b> Desayuno Continental
                      </li>
                      <li>
                        <b>•</b> WiFi grati
                      </li>
                      <li>
                        <b>•</b> Taxi de recojo
                      </li>
                    </ul>            
                  <Button
                    className="btn-round"
                    color="success"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Get Started
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card
                className="card-pricing"
                data-background="image"
                style={{
                  backgroundImage:
                    "url(" +
                    require("assets/img/price/6.JPG") +
                    ")"
                }}
              >
             <CardBody>
                    <h6 className="card-category">2 Camas Superior</h6>
                    <CardTitle tag="h1">
                      <small>S/.</small>130 <small>/night</small>
                    </CardTitle>
                    <ul>
                      <li>
                        <b>•</b> Aire Acondicionado
                      </li>
                      <li>
                        <b>•</b> Desayuno Continental
                      </li>
                      <li>
                        <b>•</b> WiFi grati
                      </li>
                      <li>
                        <b>•</b> Taxi de recojo
                      </li>
                    </ul>                    <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Get Started
                    </Button>
                  </CardBody>
                  
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        
      </div>
    </>
  );
}

export default SectionPricing;
