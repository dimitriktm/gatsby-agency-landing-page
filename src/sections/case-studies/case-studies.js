import React from "react"
import Container from "react-bootstrap/Container"

import HeaderContentBlock from "../../components/header-content-block"
import CardImg_1 from "../../images/content/card-1.jpg"
import CardImg_2 from "../../images/content/card-2.jpg"
import CardImg_3 from "../../images/content/card-3.jpg"
import CaseStudyCard from "../../components/case-study-card"
import CaseStudiesDecorationPattern from "../../images/vectors/pattern.svg"
import "./case-studies.scss"
export default () => (
    <section className="case-studies">
        <div className="case-studies-decoration-pattern">
            <img src={CaseStudiesDecorationPattern} />
        </div>
        <Container>
            <HeaderContentBlock
                title="Case Studies"
                text=" Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.
										Aliq uam ex odio, is the turpis accu msan congue euisque
										blandit dui Pelle ntesque habitant."
                className="section-heading-bloc"
            />
        </Container>
        <div className="theme-items-grid">
            <div className="theme-items-col">
                <CaseStudyCard
                    title="Isomorphic Web App"
                    thumbnail={CardImg_1}
                />
            </div>
            <div className="theme-items-col">
                <CaseStudyCard
                    title="Isomorphic Web App"
                    thumbnail={CardImg_2}
                />
            </div>
            <div className="theme-items-col">
                <CaseStudyCard
                    title="Isomorphic Web App"
                    thumbnail={CardImg_3}
                />
            </div>
        </div>
    </section>
)
