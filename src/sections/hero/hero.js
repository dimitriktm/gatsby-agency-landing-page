import React from "react"
import HeroBackground from "../../images/vectors/hero.svg"
import Container from "react-bootstrap/Container"
import BtnRounded from "../../components/btn-rounded"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

import "./hero.scss"

export default () => {
    return (
        <section
            className="hero"
            style={{
                backgroundImage: `url(${HeroBackground})`,
            }}
        >
            <Container>
                <div className="hero-content">
                    <h1 className="display-4 text-white mb-5 font-weight-semibold">
                        Web agency website
                    </h1>
                    <p className="lead text-primary-light mb-5">
                        Our products are fully custom-made, built with the
                        latest technologies and cloud-architectures.{" "}
                    </p>

                    <BtnRounded
                        as="div"
                        variant="light"
                        onClick={() => scrollTo("#about-us")}
                    >
                        Get started
                    </BtnRounded>
                </div>
            </Container>
        </section>
    )
}
