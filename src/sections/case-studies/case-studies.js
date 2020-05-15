import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import CardImg_1 from "../../images/content/card-1.jpg"
import CardImg_2 from "../../images/content/card-2.jpg"
import CardImg_3 from "../../images/content/card-3.jpg"

import "./case-studies.scss"
export default () => (
  <section id="case-studies">
    <Container>
      <div className="section-heading-block">
        <h2 className="section-heading-title">Case Studies</h2>
        <p>
          Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex
          odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque
          habitant.
        </p>
      </div>
    </Container>
    <div className="theme-items-grid">
      <div className="theme-items-col">
        <Card>
          <Card.Img variant="top" src={CardImg_1} />
          <Card.Body>
            <Card.Title>Isomorphic Web App</Card.Title>
            <Card.Text>
              Getting involved matters. Crucial causes to the if ever, come from
              passive action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to="#">Read more</Link>
          </Card.Footer>
        </Card>
      </div>
      <div className="theme-items-col">
        <Card>
          <Card.Img variant="top" src={CardImg_2} />
          <Card.Body>
            <Card.Title>Isomorphic Web App</Card.Title>
            <Card.Text>
              Getting involved matters. Crucial causes to the if ever, come from
              passive action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to="#">Read more</Link>
          </Card.Footer>
        </Card>
      </div>
      <div className="theme-items-col">
        <Card>
          <Card.Img variant="top" src={CardImg_3} />
          <Card.Body>
            <Card.Title>Isomorphic Web App</Card.Title>
            <Card.Text>
              Getting involved matters. Crucial causes to the if ever, come from
              passive action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to="#">Read more</Link>
          </Card.Footer>
        </Card>
      </div>
    </div>
  </section>
)
