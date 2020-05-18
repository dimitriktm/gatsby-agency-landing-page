import React from "react"

import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import BtnRounded from "../../components/btn-rounded"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import HeadingsGroup from "../../components/headings-group"
import documentsImage from "../../images/vectors/documents.svg"
import "./about-us.scss"
export default () => {
    return (
        <section id="about-us">
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col xs={7} className="d-none d-md-block image-column">
                        <img
                            src={documentsImage}
                            style={{ width: "250%", marginLeft: "-150%" }}
                        />
                    </Col>
                    <Col xs={12} md={5} className="px-md-0">
                        <HeadingsGroup
                            title_primary="About us"
                            title_secondary="Great Digital Agency"
                        />
                        <div className="text-block">
                            <p className="text-2xl mb-4">
                                Our products are fully custom-made, built with
                                the latest technologies and cloud-architectures.
                            </p>
                            <p className="text-lg font-weight-light">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Aliquam ex odio, turpis
                                accumsan congue. Quisque blandit dui
                                Pellentesque habitant morbi tristique senectus
                                et netus et malesuada fames ac turpis egestas.
                                In convallis porta mauris non aliquam.
                            </p>
                        </div>
                        <Link to="#">
                            <BtnRounded as="div" variant="outline-primary">
                                Get started
                            </BtnRounded>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
