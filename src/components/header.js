import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
const Header = ({ siteTitle }) => (
    <header>
        <Navbar expand="lg" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand>LOGO</Navbar.Brand>
                <Nav className="d-none d-lg-flex">
                    <Link
                        className="text-white mr-3 nav-link"
                        role="button"
                        to="#about"
                    >
                        About
                    </Link>
                    <Link
                        className="text-white mr-3 nav-link"
                        role="button"
                        to="#services"
                    >
                        Services
                    </Link>

                    <Link
                        className="text-white  mr-3 nav-link"
                        role="button"
                        to="#case-studies"
                    >
                        Case studies
                    </Link>
                    <Link
                        className="text-white nav-link"
                        role="button"
                        to="#contact"
                    >
                        Contact
                    </Link>
                </Nav>
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
