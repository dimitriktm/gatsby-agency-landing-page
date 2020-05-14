import React from "react"
import "./hero.css"
import HeroBackground from "../../images/vectors/hero.svg"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
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
          <a className="text-dark btn btn-light button-rounded-full button-xl">
            Get started >>
          </a>
        </div>
      </Container>
    </section>
  )
}
