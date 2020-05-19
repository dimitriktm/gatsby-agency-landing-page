import React from "react"
import Container from "react-bootstrap/Container"

import HeaderContentBlock from "../../components/header-content-block"

import CardsGroup from "../../components/cards-group"
import CaseStudyCard from "../../components/case-study-card"
import PageBlock from "../../components/page-block"

import CardImg_1 from "../../images/content/card-1.jpg"
import CardImg_2 from "../../images/content/card-2.jpg"
import CardImg_3 from "../../images/content/card-3.jpg"
import CaseStudiesDecorationPattern from "../../images/vectors/pattern.svg"

import "./case-studies.scss"
export default () => (
    <PageBlock spacing="lg" className="case-studies" id="case-studies">
        <div className="case-studies-decoration-pattern">
            <img src={CaseStudiesDecorationPattern} alt="" />
        </div>
        <div className="zindex-content">
            <Container>
                <HeaderContentBlock
                    title="Case Studies"
                    text=" Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.
										Aliq uam ex odio, is the turpis accu msan congue euisque
										blandit dui Pelle ntesque habitant."
                    className="section-heading-bloc"
                />
            </Container>
            <CardsGroup
                cards={[
                    <CaseStudyCard
                        title="Isomorphic Web App"
                        thumbnail={CardImg_1}
                    />,
                    <CaseStudyCard
                        title="Isomorphic Web App"
                        thumbnail={CardImg_2}
                    />,
                    <CaseStudyCard
                        title="Isomorphic Web App"
                        thumbnail={CardImg_3}
                    />,
                ]}
            ></CardsGroup>
        </div>
    </PageBlock>
)
