import React from "react"

import Container from "react-bootstrap/Container"
import TechIcon from "../../components/tech-icon"
import TrianglesComposition from "../../images/vectors/triangles-composition.svg"
import "./technologies.scss"
export default () => (
  <section id="technologies">
    <div className="tech-triangles-decoration">
      <img src={TrianglesComposition} alt="" />
    </div>
    <Container>
      <div className="section-heading-block">
        <h2 className="section-heading-title">Core Technologies</h2>
        <p>
          Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex
          odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque
          habitant.
        </p>
      </div>
      <div className="tech-icons-grp">
        <TechIcon icon="react" />
        <TechIcon icon="aws" />
        <TechIcon icon="redux" />
        <TechIcon icon="js" />
        <TechIcon icon="symfony" />
        <TechIcon icon="node" />
        <TechIcon icon="firebase" />
      </div>
    </Container>
  </section>
)
