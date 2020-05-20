import { AnchorLink } from "gatsby-plugin-anchor-links"
import PropTypes from "prop-types"
import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import scrollTo from "gatsby-plugin-smoothscroll"
const Header = ({ siteTitle }) => (
    <header>
        <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            fixed="top"
            bg="primary"
        >
            <Container>
                <Navbar.Brand>LOGO</Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="navbar-responsive"
                    style={{ border: "none" }}
                />
                <Navbar.Collapse id="navbar-responsive">
                    <Nav className="d-lg-inline-flex ml-auto">
                        <Nav.Link
                            as="button"
                            className="text-white mr-3 nav-link"
                            role="button"
                            href="#about-us"
                            onClick={() => scrollTo("#about-us")}
                        >
                            About Us
                        </Nav.Link>
                        <Nav.Link
                            as="button"
                            className="text-white mr-3 nav-link"
                            role="button"
                            href="#our-services"
                            onClick={() => scrollTo("#our-services")}
                        >
                            Our Services
                        </Nav.Link>
                        <Nav.Link
                            as="button"
                            className="text-white mr-3 nav-link"
                            role="button"
                            href="#case-studies"
                            onClick={() => scrollTo("#case-studies")}
                        >
                            Case Studies
                        </Nav.Link>
                        <Nav.Link
                            as="button"
                            className="text-white mr-3 "
                            role="button"
                            href="#contact-us"
                            onClick={() => scrollTo("#contact-us")}
                        >
                            Contact Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
