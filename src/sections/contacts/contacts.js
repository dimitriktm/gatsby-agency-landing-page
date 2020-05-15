import React from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import "./contacts.scss"
export default () => (
  <section id="contacts">
    <Container>
      <Form id="contact-form">
        <h3>Send us message</h3>
        <Form.Group>
          <Form.Label>Email*</Form.Label>
          <Form.Control></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Name*</Form.Label>
          <Form.Control></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone number*</Form.Label>
          <Form.Control></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Subject</Form.Label>
          <Form.Control></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea"></Form.Control>
        </Form.Group>
      </Form>
    </Container>
  </section>
)
