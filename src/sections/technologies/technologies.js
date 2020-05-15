import React from "react"

import Container from "react-bootstrap/Container"
import TechIcon from "../../components/tech-icon"
import "./technologies.scss"
export default () => (
  <section id="technologies" className="bg-primary-light">
    <Container>
      <div className="tech-heading max-w-50">
        <h3>Core Technologies</h3>
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
