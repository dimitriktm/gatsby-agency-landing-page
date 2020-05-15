import React from "react"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"

import ListSvg from "../../images/vectors/list.svg"

import "./our-services.scss"
export default () => {
  return (
    <div id="our-services">
      <Container>
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-5">
            <div className="headings-group-section">
              <h2>Transforming your ideas into Reality</h2>
              <h3>Our services</h3>
            </div>
            <div className="services-btns-group">
              <button className="btn button-primary-weaker">
                Web Development
              </button>
              <button className="btn button-primary-weaker">
                Mobile Development
              </button>
              <button className="btn button-primary-weaker">
                UI/UX Designing
              </button>
              <button className="btn button-primary-weaker">Branding</button>
              <button className="btn button-primary-weaker">
                Cloud Technology
              </button>
            </div>
          </div>
          <div className="col-12 col-md-7 services-right-col">
            <Card className="services-card">
              <Card.Title className="d-flex align-items-center">
                <img className="mr-4" src={ListSvg} />
                <h3 className="h1">UI/UX Designing</h3>
              </Card.Title>
              <Card.Body>
                <p className="services-card-body-text">
                  Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.
                  Aliq uam ex odio, is the turpis accu msan congue euisque
                  blandit dui Pelle ntesque habitant.
                </p>
                <ListGroup>
                  <ListGroupItem>
                    <div className="icon-square icon-square-success mr-3">
                      <i className="fas fa-check"></i>
                    </div>
                    Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="icon-square icon-square-success mr-3">
                      <i className="fas fa-check"></i>
                    </div>
                    Lorem ipsum dolor sit amet,
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="icon-square icon-square-success mr-3">
                      <i className="fas fa-check"></i>
                    </div>
                    conse ctetur adipi scing elit.
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="icon-square icon-square-success mr-3">
                      <i className="fas fa-check"></i>
                    </div>
                    Lorem ipsum dolor sit amet, conse ctetur
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  )
}
