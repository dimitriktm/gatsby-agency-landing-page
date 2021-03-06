import React from "react"

import Container from "react-bootstrap/Container"
import TechIcon from "../../components/tech-icon/tech-icon"
import HeaderContentBlock from "../../components/header-content-block"
import TrianglesComposition from "../../images/vectors/triangles-composition.svg"
import PageBlock from "../../components/page-block"

import "./technologies.scss"
export default () => (
    <PageBlock spacing="lg" className="technologies" id="technologies">
        <div className="tech-triangles-decoration">
            <img src={TrianglesComposition} alt="" />
        </div>
        <div className="zindex-content">
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
        </div>
    </PageBlock>
)
