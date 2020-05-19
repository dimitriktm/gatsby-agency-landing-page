import React from "react"
import { Link } from "gatsby"

import Card from "react-bootstrap/Card"
import "./case-study-card.scss"

export default ({ title, thumbnail }) => (
    <div className="case-study-card">
        <Card className="case-study-card">
            <a href="#placeholder">
                <Card.Img variant="top" src={thumbnail} />
            </a>
            <Card.Body>
                <Card.Title as="h4">{title}</Card.Title>
                <Card.Text>
                    Getting involved matters. Crucial causes to the if ever,
                    come from passive action.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Link to="/" className="text-xl">
                    Read more
                </Link>
            </Card.Footer>
        </Card>
    </div>
)
