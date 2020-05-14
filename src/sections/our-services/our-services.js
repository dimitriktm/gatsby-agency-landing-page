import React from "react"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"

import ListSvg from "../../images/vectors/list.svg"
export default () => {
  return (
    <div>
      <Container>
        <div className="row align-items-center justify-content-between">
          <div className="col-5">
            <div className="headings-group-section">
              <h2>Transforming your ideas into Reality</h2>
              <h3>Our services</h3>
            </div>
          </div>
          <div
            className="col-7"
            style={{
              marginRight: "-5vw",
              marginLeft: "5vw",
            }}
          >
            <Card
              style={{
                minWidth: "128%",
                paddingRight: "30%",
              }}
            >
              <Card.Title className="d-flex align-items-center">
                <img className="mr-4" src={ListSvg} />
                <h3>UI/UX Designing</h3>
              </Card.Title>
              <Card.Body>
                <p>
                  Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.
                  Aliq uam ex odio, is the turpis accu msan congue euisque
                  blandit dui Pelle ntesque habitant.
                </p>
                <ListGroup>
                  <ListGroupItem>
                    Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.
                  </ListGroupItem>
                  <ListGroupItem>Lorem ipsum dolor sit amet,</ListGroupItem>
                  <ListGroupItem>conse ctetur adipi scing elit.</ListGroupItem>
                  <ListGroupItem>
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
