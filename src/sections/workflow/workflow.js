import React from "react"
import Container from "react-bootstrap/Container"
import CardWithLabel from "../../components/card-with-label"
import "./workflow.scss"
export default () => (
  <section id="workflow">
    <Container>
      <div className="workflow-header max-w-50">
        <h2>Workflow</h2>
        <p>
          Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex
          odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque
          habitant.
        </p>
      </div>
    </Container>
    <di className="workflow-grid">
      <div className="workflow-col">
        <CardWithLabel label="step 1" title="Send your brief">
          <>
            <p>
              Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq
              uam ex odio, is the turpis accu msan congue euisque blandit dui
              Pelle ntesque habitant.
            </p>
            <p>
              Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq
              uam ex odio, is the turpis accu msan congue euisque blandit dui
              Pelle ntesque habitant.
            </p>
          </>
        </CardWithLabel>
      </div>
      <div className="workflow-col">
        <CardWithLabel label="step 2" title="Wait for delivery">
          <>
            <p>
              Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq
              uam ex odio, is the turpis accu msan congue euisque blandit dui
              Pelle ntesque habitant.
            </p>
            <p>
              Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq
              uam ex odio, is the turpis accu msan congue euisque blandit dui
              Pelle ntesque habitant.
            </p>
          </>
        </CardWithLabel>
      </div>
      <div className="workflow-col">
        <CardWithLabel label="step 3" title="Get your files!">
          <>
            <p>
              Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq
              uam ex odio, is the turpis accu msan congue euisque blandit dui
              Pelle ntesque habitant.
            </p>
            <p>
              Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq
              uam ex odio, is the turpis accu msan congue euisque blandit dui
              Pelle ntesque habitant.
            </p>
          </>
        </CardWithLabel>
      </div>
    </di>
  </section>
)
