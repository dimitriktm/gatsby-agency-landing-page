import React from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import BtnRounded from "../../components/btn-rounded"

import ContactsDecorationTriangle from "../../images/vectors/triangle.svg"
import { useFormik } from "formik"
import * as Yup from "yup"
import "./contacts.scss"

export default () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            phone_number: "",
            subject: "",
            message: "",
            privacy: false,
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required(),
            name: Yup.string().min(2).max(64).required(),
            phone_number: Yup.string().min(9).max(24).required(),
            subject: Yup.string().max(128),
            message: Yup.string().max(1024),
            privacy: Yup.string().matches(/true/).required(),
        }),
    })
    return (
        <section className="contacts">
            <div className="contacts-decoration-triangle">
                <img src={ContactsDecorationTriangle} />
            </div>
            <div className="zindex-content">
                <Container>
                    <Form className="contact-form">
                        <h2 className="contact-form-title h3">
                            Send us message
                        </h2>
                        <Form.Group>
                            {/* <FloatingLabel text="Email*"></FloatingLabel> */}
                            <Form.Control
                                className={`shadow-none ${
                                    formik.touched.email && !formik.errors.email
                                        ? "form-control-valid"
                                        : ""
                                } ${
                                    formik.touched.email && formik.errors.email
                                        ? "form-control-invalid"
                                        : null
                                }`}
                                name="email"
                                required={true}
                                type="email"
                                placeholder="Email"
                                {...formik.getFieldProps("email")}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                className={`shadow-none ${
                                    formik.touched.name && !formik.errors.name
                                        ? "form-control-valid"
                                        : ""
                                } ${
                                    formik.touched.name && formik.errors.name
                                        ? "form-control-invalid"
                                        : null
                                }`}
                                name="name"
                                required={true}
                                {...formik.getFieldProps("name")}
                                placeholder="Name"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                className={`shadow-none ${
                                    formik.touched.phone_number &&
                                    !formik.errors.phone_number
                                        ? "form-control-valid"
                                        : ""
                                } ${
                                    formik.touched.phone_number &&
                                    formik.errors.phone_number
                                        ? "form-control-invalid"
                                        : null
                                }`}
                                name="phone_number"
                                required={true}
                                {...formik.getFieldProps("phone_number")}
                                placeholder="Phone number"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                className={`shadow-none ${
                                    formik.touched.subject &&
                                    !formik.errors.subject
                                        ? "form-control-valid"
                                        : ""
                                } ${
                                    formik.touched.subject &&
                                    formik.errors.subject
                                        ? "form-control-invalid"
                                        : ""
                                }`}
                                name="subject"
                                {...formik.getFieldProps("subject")}
                                placeholder="Subject"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                className={`shadow-none ${
                                    formik.touched.message &&
                                    !formik.errors.message
                                        ? "form-control-valid"
                                        : ""
                                } ${
                                    formik.touched.message &&
                                    formik.errors.message
                                        ? "form-control-invalid"
                                        : ""
                                }`}
                                name="message"
                                as="textarea"
                                rows="3"
                                {...formik.getFieldProps("message")}
                                placeholder="Message"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check
                                className={`shadow-none contact-form-checkbox ${
                                    formik.touched.privacy &&
                                    !formik.errors.privacy
                                        ? "form-control-valid-checkbox"
                                        : ""
                                } ${
                                    formik.touched.privacy &&
                                    formik.errors.privacy
                                        ? "form-control-invalid-checkbox"
                                        : null
                                }`}
                                custom
                                type="checkbox"
                                id={`custom-checkbox`}
                                label={`By sending this message, you confirm that you have read and agreed to our privacy-policy.`}
                                required={true}
                                {...formik.getFieldProps("privacy")}
                            />
                        </Form.Group>
                        <BtnRounded type="submit">Send email</BtnRounded>
                    </Form>
                </Container>
            </div>
        </section>
    )
}
