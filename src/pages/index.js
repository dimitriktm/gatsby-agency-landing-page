import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../sections/hero"
import AboutUs from "../sections/about-us"
import OurServices from "../sections/our-services"
import Workflow from "../sections/workflow"
import Technologies from "../sections/technologies"
import CaseStudies from "../sections/case-studies"
import Contacts from "../sections/contacts"
const IndexPage = () => (
    <Layout>
        <SEO title="Web agency" />
        <Hero />
        <AboutUs />
        <OurServices />
        <Workflow />
        <Technologies />
        <CaseStudies />
        <Contacts />
    </Layout>
)

export default IndexPage
