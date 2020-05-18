import React from "react"
import Container from "react-bootstrap/Container"
import CardWithLabel from "../../components/card-with-label/card-with-label"
import HeaderContentBlock from "../../components/header-content-block"
import CardsGroup from "../../components/cards-group"
import PageBlock from "../../components/page-block"

import "./workflow.scss"
export default () => (
    <PageBlock spacing="xl" className="workflow" id="workflow">
        <Container>
            <HeaderContentBlock
                title="Workflow"
                text="Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.
                    Aliq uam ex odio, is the turpis accu msan congue euisque
                    blandit dui Pelle ntesque habitant."
                className="workflow-header"
            />
        </Container>
        <CardsGroup
            cards={[
                <CardWithLabel label="step 1" title="Send your brief">
                    <>
                        <p>
                            Lorem ipsum dolor sit amet, conse ctetur adipi scing
                            elit. Aliq uam ex odio, is the turpis accu msan
                            congue euisque blandit dui Pelle ntesque habitant.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, conse ctetur adipi scing
                            elit. Aliq uam ex odio, is the turpis accu msan
                            congue euisque blandit dui Pelle ntesque habitant.
                        </p>
                    </>
                </CardWithLabel>,
                <CardWithLabel label="step 2" title="Wait for delivery">
                    <>
                        <p>
                            Lorem ipsum dolor sit amet, conse ctetur adipi scing
                            elit. Aliq uam ex odio, is the turpis accu msan
                            congue euisque blandit dui Pelle ntesque habitant.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, conse ctetur adipi scing
                            elit. Aliq uam ex odio, is the turpis accu msan
                            congue euisque blandit dui Pelle ntesque habitant.
                        </p>
                    </>
                </CardWithLabel>,
                <CardWithLabel label="step 3" title="Get your files!">
                    <>
                        <p>
                            Lorem ipsum dolor sit amet, conse ctetur adipi scing
                            elit. Aliq uam ex odio, is the turpis accu msan
                            congue euisque blandit dui Pelle ntesque habitant.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, conse ctetur adipi scing
                            elit. Aliq uam ex odio, is the turpis accu msan
                            congue euisque blandit dui Pelle ntesque habitant.
                        </p>
                    </>
                </CardWithLabel>,
            ]}
        />
    </PageBlock>
)
