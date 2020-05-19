import React from "react"
import * as Yup from "yup"

import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import { useFormik } from "formik"

import BtnRounded from "../../components/btn-rounded"
import PageBlock from "../../components/page-block"

import ContactsDecorationTriangle from "../../images/vectors/triangle.svg"

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
            email: Yup.string()
                .email("Invalid email format")
                .required("Required"),
            name: Yup.string()
                .min(2, "Min 2 characters")
                .max(64, "Max 64 characters")
                .required("Required"),
            phone_number: Yup.string()
                .min(9, "Min 9 characters")
                .max(24, "Max 24 characters")
                .required("Required"),
            subject: Yup.string().max(128, "Max 128 characters"),
            message: Yup.string().max(1024, "Max 1024 characters"),
            privacy: Yup.string().matches(/true/).required("Required"),
        }),
    })
    return (
        <PageBlock className="contacts" id="contact-us">
            <div className="contacts-decoration-triangle">
                <img src={ContactsDecorationTriangle} alt="" />
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
                                className="shadow-none"
                                name="email"
                                required={true}
                                type="email"
                                placeholder="Email"
                                {...formik.getFieldProps("email")}
                                isValid={
                                    formik.touched.email && !formik.errors.email
                                }
                                isInvalid={
                                    formik.touched.email && formik.errors.email
                                }
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                className="shadow-none"
                                name="name"
                                required={true}
                                {...formik.getFieldProps("name")}
                                placeholder="Name"
                                isValid={
                                    formik.touched.name && !formik.errors.name
                                }
                                isInvalid={
                                    formik.touched.name && formik.errors.name
                                }
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.name}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                className="shadow-none"
                                name="phone_number"
                                required={true}
                                {...formik.getFieldProps("phone_number")}
                                placeholder="Phone number"
                                isValid={
                                    formik.touched.phone_number &&
                                    !formik.errors.phone_number
                                }
                                isInvalid={
                                    formik.touched.phone_number &&
                                    formik.errors.phone_number
                                }
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.phone_number}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                className="shadow-none"
                                name="subject"
                                {...formik.getFieldProps("subject")}
                                placeholder="Subject"
                                isValid={
                                    formik.touched.subject &&
                                    !formik.errors.subject
                                }
                                isInvalid={
                                    formik.touched.subject &&
                                    formik.errors.subject
                                }
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.subject}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                className="shadow-none"
                                name="message"
                                as="textarea"
                                rows="3"
                                {...formik.getFieldProps("message")}
                                placeholder="Message"
                                isValid={
                                    formik.touched.message &&
                                    !formik.errors.message
                                }
                                isInvalid={
                                    formik.touched.message &&
                                    formik.errors.message
                                }
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Check
                                className="shadow-none contact-form-checkbox"
                                custom
                                type="checkbox"
                                id={`custom-checkbox`}
                                label={`By sending this message, you confirm that you have read and agreed to our privacy-policy.`}
                                required={true}
                                {...formik.getFieldProps("privacy")}
                                isValid={
                                    formik.touched.privacy &&
                                    !formik.errors.privacy
                                }
                                isInvalid={
                                    formik.touched.privacy &&
                                    formik.errors.privacy
                                }
                            />
                        </Form.Group>
                        <BtnRounded type="submit">Send email</BtnRounded>
                    </Form>
                </Container>
            </div>
        </PageBlock>
    )
}
