import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"

import BtnWithOpacity from "../../components/btn-with-opacity"
import HeadingsGroup from "../../components/headings-group"

import ListSvg from "../../images/vectors/list.svg"

import "./our-services.scss"
export default () => {
    return (
        <section id="our-services">
            <Container className="services-container">
                <Row className="justify-content-between">
                    <Col xs={12} md={5} className="mt-lg-5 mb-5 mb-md-0">
                        <HeadingsGroup
                            title_primary="Our services"
                            title_secondary="Transforming your ideas into Reality"
                        />
                        <div className="services-btns-group">
                            <BtnWithOpacity>Web Development</BtnWithOpacity>
                            <BtnWithOpacity>Mobile Development</BtnWithOpacity>
                            <BtnWithOpacity>UI/UX Designing</BtnWithOpacity>
                            <BtnWithOpacity>Branding</BtnWithOpacity>
                            <BtnWithOpacity>Cloud Technology</BtnWithOpacity>
                        </div>
                    </Col>
                    <Col xs={12} md={7} className="services-right-col">
                        <Card className="services-card">
                            <Card.Title className="d-flex align-items-center">
                                <img
                                    className="services-card-icon mr-4"
                                    src={ListSvg}
                                />
                                <h4 className="h2 font-weight-semibold">
                                    UI/UX Designing
                                </h4>
                            </Card.Title>
                            <Card.Body>
                                <p className="services-card-body-text">
                                    Lorem ipsum dolor sit amet, conse ctetur
                                    adipi scing elit. Aliq uam ex odio, is the
                                    turpis accu msan congue euisque blandit dui
                                    Pelle ntesque habitant.
                                </p>
                                <ListGroup>
                                    <ListGroupItem>
                                        <div className="services-card-checkmark mr-3">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        Lorem ipsum dolor sit amet, conse ctetur
                                        adipi scing elit.
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <div className="services-card-checkmark mr-3">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        Lorem ipsum dolor sit amet,
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <div className="services-card-checkmark mr-3">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        conse ctetur adipi scing elit.
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <div className="services-card-checkmark mr-3">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        Lorem ipsum dolor sit amet, conse ctetur
                                    </ListGroupItem>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
