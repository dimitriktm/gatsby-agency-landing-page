import React from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-styled-floating-label"
import BtnRoundedFull from "../../components/btn-rounded-full"
import "./contacts.scss"
export default () => (
  <section id="contacts">
    <Container>
      <Form id="contact-form">
        <h3 className="contact-form-title">Send us message</h3>
        <Form.Group>
          <FloatingLabel text="Email*">
            <Form.Control
              className="shadow-none"
              name="email"
              required={true}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group>
          <FloatingLabel text="Name*">
            <Form.Control className="shadow-none" name="name" required={true} />
          </FloatingLabel>
        </Form.Group>
        <Form.Group>
          <FloatingLabel text="Phone number*">
            <Form.Control
              className="shadow-none"
              name="phone_number"
              required={true}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group>
          <FloatingLabel text="Subject">
            <Form.Control className="shadow-none" name="subject" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group>
          <FloatingLabel text="Message">
            <Form.Control
              className="shadow-none"
              name="message"
              as="textarea"
              rows="3"
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group>
          <Form.Check
            custom
            type="checkbox"
            id={`custom-checkbox`}
            label={`By sending this message, you confirm that you have read and agreed to our privacy-policy.`}
          />
        </Form.Group>
        <BtnRoundedFull>Send email</BtnRoundedFull>
      </Form>
    </Container>
  </section>
)
