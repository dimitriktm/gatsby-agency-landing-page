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
          <Nav.Link>
            <Link className="text-white mr-3" to="#about">
              About
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="text-white mr-3" to="#services">
              Services
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link className="text-white  mr-3" to="#case-studies">
              Case studies
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="text-white mr-3" to="#testimonials">
              Testimonials
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="text-white" to="#contact">
              Contact
            </Link>
          </Nav.Link>
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
