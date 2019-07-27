import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";


// core components

function SectionSections() {
  return (
    <>
     <div className="blog-4">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title text-center">Check us out</h2>
                <br />
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/home/HMatrimonial3.JPG")}
                       
                        
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="card-category text-warning">Travel</h6>
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                      Habitaciones y Precios
                      </a>
                    </CardTitle>
                    <p className="card-description">
                    Contamos con habitaciones Matrimoniales, Individuales y 2 Camas
            con toda las necesidades que requieren nuestros huéspedes. Para 
            nuestras reservaciones directas siempre contamos con 
            grandes descuentos en alojamiento y servicio de Tours.
                    </p>
                    <br />
                    <Button
                      className="btn-round"
                      color="warning"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Read More
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/home/Picture1.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="card-category text-info">Travel</h6>
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                      Ubicación
                      </a>
                    </CardTitle>
                    <p className="card-description">
                    Hotel Fatima Inn. está ubicado a media cuadra de la Plaza de Armas, 
              zona céntrica de la ciudad de Tarapoto, por lo tanto, nuestros huéspedes 
              tienen una ubicación privilegiada para movilizarse durante el dia y noche 
              con total seguridad.
                    </p>
                    <br />
                    <Button
                      className="btn-round"
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Read More
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/home/Reception-HotelFatimaInn1.jpg")}

                        
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="card-category text-danger">Lifestyle</h6>
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                      Nuestra Propiedad
                      </a>
                    </CardTitle>
                    <p className="card-description">
                    El Hotel Fatima Inn. es un edificio de 5 pisos
            de infraestructura moderna y para la seguridad de todos contamos
           en las areas comunes camaras de seguridad las 24 horas. Además,
           los años actualizamos nuestras habitaciones con el proposito de 
           dar un buen servicio y hacer que los huéspedes se sientan como en casa.
                    </p>
                    <br />
                    <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Read More
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/home/Auditorio1-FatimaInnHotel.jpg")}                        
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="card-category text-success">Best Seller</h6>
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                      Sala de Conferencia
                      </a>
                    </CardTitle>
                    <p className="card-description">
                    Contamos con 2 amplios Audutorios con todo lo moderno
              para que realizen sus eventos, charlas, capacitaciones, 
              pesentaciones de productos, etc con una capacidad de 120 
              personas, además de regalarles publicidad gratuita 
              en toda nuestras plataformas de facebook, twitter, Instagram.
                    </p>
                    <br />
                    <Button
                      className="btn-round"
                      color="success"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Read More
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        </>
  );
}
      

export default SectionSections;
