import React from "react"
import Container from "react-bootstrap/Container"
import "./workflow.scss"
export default () => (
  <section id="workflow">
    <Container>
      <div className="workflow-header">
        <h2>Workflow</h2>
        <p>
          Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex
          odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque
          habitant.
        </p>
      </div>
    </Container>
    <div className="workflow-grid">
      <div className="workflow-col">
        <div className="card-workflow">
          <div className="card-workflow-body">
            <div className="btn button-primary-weaker button-rounded-full card-workflow-label">
              step 1
            </div>
            <h3>Send your brief</h3>
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
          </div>
        </div>
      </div>
      <div className="workflow-col">
        <div className="card-workflow">
          <div className="card-workflow-body">
            <div className="btn button-primary-weaker button-rounded-full card-workflow-label">
              step 2
            </div>
            <h3>Wait for delivery</h3>
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
          </div>
        </div>
      </div>
      <div className="workflow-col">
        <div className="card-workflow">
          <div className="card-workflow-body">
            <div className="btn button-primary-weaker button-rounded-full card-workflow-label">
              step 3
            </div>
            <h3>Get your files!</h3>
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
          </div>
        </div>
      </div>
    </div>
  </section>
)
