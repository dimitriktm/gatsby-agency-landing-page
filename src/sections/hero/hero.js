import React from "react"
import HeroBackground from "../../images/vectors/hero.svg"
import Container from "react-bootstrap/Container"
import BtnRounded from "../../components/btn-rounded"
import { Link } from "gatsby"

import "./hero.scss"

export default () => {
    return (
        <section
            id="hero"
            style={{
                backgroundImage: `url(${HeroBackground})`,
            }}
        >
            <Container>
                <div className="hero-content">
                    <h1 className="display-4 text-white mb-5 font-weight-semibold">
                        Freebie Web Design
                        <br />
                        Web Development Template
                        <br />
                        by inkyy.com
                    </h1>
                    <p className="lead text-primary-light mb-5">
                        Our products are fully custom-made, built with the
                        latest technologies and cloud-architectures.{" "}
                    </p>
                    <Link to="#todo">
                        <BtnRounded as="div" variant="light">
                            Get started
                        </BtnRounded>
                    </Link>
                </div>
            </Container>
        </section>
    )
}
