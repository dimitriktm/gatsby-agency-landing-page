import React from "react"
import HeroBackground from "../../images/vectors/hero.svg"
import Container from "react-bootstrap/Container"
import BtnRoundedFull from "../../components/btn-rounded-full"
import { Link } from "gatsby"

import "./hero.scss"

export default () => {
  return (
    <section
      id="hero"
      style={{
        backgroundImage: `url(${HeroBackground})`,
      }}
    >
      <Container>
        <div className="hero-content">
          <h1 className="display-4 text-white mb-5">
            Freebie Web Design
            <br />
            Web Development Template
            <br />
            by inkyy.com
          </h1>
          <p className="hero-subtitle text-theme-primary-light h5 mb-5">
            Our products are fully custom-made, built with the latest
            technologies and cloud-architectures.{" "}
          </p>
          <Link to="#todo">
            <BtnRoundedFull as="div" variant="light">
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
        </div>
      </Container>
    </section>
  )
}
