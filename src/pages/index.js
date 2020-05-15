import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Hero from "../sections/hero"
import AboutUs from "../sections/about-us"
import OurServices from "../sections/our-services"
import Workflow from "../sections/workflow"
import Technologies from "../sections/technologies"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <AboutUs />
    <OurServices />
    <Workflow />
    <Technologies />
  </Layout>
)

export default IndexPage
