import React from "react"

import { Link } from "gatsby"
import Container from "react-bootstrap/Container"

import documentsImage from "../../images/vectors/documents.svg"
import "./about-us.scss"
export default () => {
  return (
    <section id="about-us">
      <Container>
        <div className="row align-items-center justify-content-between">
          <div className="d-none d-md-block col-7 image-column">
            <img
              src={documentsImage}
              style={{ width: "250%", marginLeft: "-150%" }}
            />
          </div>
          <div className="col-12 col-md-5 px-md-0">
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
            <Link
              to="#"
              className="btn btn-outline-primary button-rounded-full button-xl"
            >
              Get started >>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
