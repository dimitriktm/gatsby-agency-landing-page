import React from "react"

import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import BtnRoundedFull from "../../components/btn-rounded-full"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
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
            <div className="headings-group-section">
              <h2 className="font-weight-semibold">Great Digital Agency</h2>
              <h3>About us</h3>
            </div>
            <div className="text-block">
              <p className="h5 font-weight-normal mb-4">
                Our products are fully custom-made, built with the latest
                technologies and cloud-architectures.
              </p>
              <p className="font-weight-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                ex odio, turpis accumsan congue. Quisque blandit dui
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. In convallis porta mauris non
                aliquam.
              </p>
            </div>
            <Link to="#">
              <BtnRoundedFull as="div" variant="outline-primary">
                Get started
                <i class="fas fa-chevron-right fa-xs ml-2"></i>
                <i
                  class="fas fa-chevron-right fa-xs"
                  style={{
                    marginLeft: "-.25rem",
                  }}
                ></i>
              </BtnRoundedFull>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}