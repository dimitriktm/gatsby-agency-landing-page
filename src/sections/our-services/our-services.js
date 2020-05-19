import React from "react"
import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import PageBlock from "../../components/page-block"

import BtnWithOpacity from "../../components/btn-with-opacity"
import HeadingsGroup from "../../components/headings-group"

import ListSvg from "../../images/vectors/list.svg"

import "./our-services.scss"

const ServicesTabPaneContent = ({ title, icon, text }) => (
    <div className="services-tab-pane-content">
        <div className="services-tab-pane-content-heading">
            <img src={icon} alt="" />
            <h3 className="h2-md ">{title}</h3>
        </div>
        <p>{text}</p>
    </div>
)
export default () => {
    return (
        <PageBlock id="our-services">
            {/* What a mess */}
            <Container className="services-container">
                <Tab.Container
                    id="services-tabs-container"
                    defaultActiveKey="web"
                >
                    <Row className="justify-content-between">
                        <Col xs={12} md={5} className="mt-lg-5 mb-5 mb-md-0">
                            <HeadingsGroup
                                title_primary="Our services"
                                title_secondary="Transforming your ideas into Reality"
                            />
                            <Nav className="services-tabs-btns-group">
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey="web"
                                        className=" btn button-with-opacity font-weight-semibold"
                                    >
                                        Web development
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey="mobile"
                                        className=" btn button-with-opacity font-weight-semibold"
                                    >
                                        Mobile development
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey="uiux"
                                        className=" btn button-with-opacity font-weight-semibold"
                                    >
                                        UI/UX Designing
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey="branding"
                                        className=" btn button-with-opacity font-weight-semibold"
                                    >
                                        Branding
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey="cloud"
                                        className=" btn button-with-opacity font-weight-semibold"
                                    >
                                        Cloud Technology
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col xs={12} md={7} className="services-right-col">
                            <div className="services-tab-content">
                                <Tab.Content>
                                    <Tab.Pane eventKey="web">
                                        <ServicesTabPaneContent
                                            title="Web Development"
                                            icon={ListSvg}
                                            text="Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the  turpis accu msan congue euisque blandit dui Pelle ntesque habitant.Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the  turpis accu msan congue euisque blandit dui Pelle ntesque habitant."
                                        />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="mobile">
                                        <ServicesTabPaneContent
                                            title="Mobile Development"
                                            icon={ListSvg}
                                            text="Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the  turpis accu msan congue euisque blandit dui Pelle ntesque habitant.Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the  turpis accu msan congue euisque blandit dui Pelle ntesque habitant."
                                        />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="uiux">
                                        <ServicesTabPaneContent
                                            title="UI/UX Designing"
                                            icon={ListSvg}
                                            text="Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the  turpis accu msan congue euisque blandit dui Pelle ntesque habitant.Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the  turpis accu msan congue euisque blandit dui Pelle ntesque habitant."
                                        />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="branding">
                                        <ServicesTabPaneContent
                                            title="Branding"
                                            icon={ListSvg}
                                            text="Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the  turpis accu msan congue euisque blandit dui Pelle ntesque habitant.Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the  turpis accu msan congue euisque blandit dui Pelle ntesque habitant."
                                        />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="cloud">
                                        <ServicesTabPaneContent
                                            title="Cloud Technology"
                                            icon={ListSvg}
                                            text="Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the  turpis accu msan congue euisque blandit dui Pelle ntesque habitant.Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the  turpis accu msan congue euisque blandit dui Pelle ntesque habitant."
                                        />
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </PageBlock>
    )
}
