import React from "react"

import Container from "react-bootstrap/Container"
import TechIcon from "../../components/tech-icon/tech-icon"
import HeaderContentBlock from "../../components/header-content-block"
import TrianglesComposition from "../../images/vectors/triangles-composition.svg"
import "./technologies.scss"
export default () => (
    <section id="technologies">
        <div className="tech-triangles-decoration">
            <img src={TrianglesComposition} alt="" />
        </div>
        <Container>
            <HeaderContentBlock
                title="Core Technologies"
                text="Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.
                    Aliq uam ex odio, is the turpis accu msan congue euisque
                    blandit dui Pelle ntesque habitant."
                className="section-heading-block"
            />
            <div className="tech-icons-grp">
                <TechIcon icon="react" />
                <TechIcon icon="aws" />
                <TechIcon icon="wordpress-simple" />
                <TechIcon icon="js" />
                <TechIcon icon="symfony" />
                <TechIcon icon="node" />
                <TechIcon icon="shopify" />
            </div>
        </Container>
    </section>
)
