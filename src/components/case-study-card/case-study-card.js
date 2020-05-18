import React from "react"
import { Link } from "gatsby"

import Card from "react-bootstrap/Card"
import "./case-study-card.scss"
export default ({ title, thumbnail }) => (
    <div id="case-study-card">
        <Card bsClass="case-study-card">
            <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
                <Card.Title as="h4">{title}</Card.Title>
                <Card.Text>
                    Getting involved matters. Crucial causes to the if ever,
                    come from passive action.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Link className="text-xl" to="#">
                    Read more
                </Link>
            </Card.Footer>
        </Card>
    </div>
)
