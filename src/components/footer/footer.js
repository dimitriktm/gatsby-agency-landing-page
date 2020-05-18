import React from "react"
import SocialBtn from "../social-btn"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./footer.scss"
export default () => (
    <footer className="footer">
        <Container>
            <Row className="justify-content-between">
                <Col xs="12" lg="2" className=" mb-5 mb-lg-0 text-center">
                    <div className="footer-socials">
                        <SocialBtn href="/" icon_name="fab fa-facebook-f" />
                        <SocialBtn href="/" icon_name="fab fa-twitter" />
                        <SocialBtn href="/" icon_name="fab fa-instagram" />
                    </div>
                </Col>
                <Col xs="12" lg="9" xl="8">
                    <Row className="justify-content-center justify-content-lg-between flex-wrap">
                        <Col xs="12" md="4" className="mb-5 mg-lg-0">
                            <h5>Our services</h5>
                            <div className="line"></div>
                            <ul>
                                <li>
                                    <a href="#">Web development</a>
                                </li>
                                <li>
                                    <a href="#">Mobile development</a>
                                </li>
                                <li>
                                    <a href="#">Cloud Technologies</a>
                                </li>
                                <li>
                                    <a href="#">UI/UX Design</a>
                                </li>
                            </ul>
                        </Col>
                        <Col xs="12" md="4" className="mb-5 mb-lg-0">
                            <h5>Our links</h5>
                            <div className="line"></div>

                            <ul>
                                <li>
                                    <a href="#">Terms & Conditions</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Imprint</a>
                                </li>
                                <li>
                                    <a href="#">Legal</a>
                                </li>
                            </ul>
                        </Col>
                        <Col xs="12" md="4" className="mb-5 mb-lg-0">
                            <h5>Contact Us</h5>
                            <div className="line"></div>
                            <ul>
                                <li>
                                    <a href="#" className="d-flex">
                                        <i class="fas fa-map-marker-alt mr-2 mt-1"></i>
                                        <span>
                                            Al. Dummyodl 124/23 floor 123 Lipsum
                                            Street, 02-577 USA.
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="tel:00 387 65 302 657"
                                        target="_blank"
                                        className="d-flex"
                                    >
                                        <i class="fas fa-phone-alt mr-2 mt-1"></i>
                                        <span>00 387 65 302 657</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:mail@mail.com"
                                        className="d-flex"
                                        target="_blank"
                                    >
                                        <i class="fas fa-envelope mr-2 mt-1"></i>
                                        <span>mail@mail.com</span>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </footer>
)
