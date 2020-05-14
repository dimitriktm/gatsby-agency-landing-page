import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Hero from "../sections/hero"
import AboutUs from "../sections/about-us"
import OurServices from "../sections/our-services"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <AboutUs />
    <OurServices />
  </Layout>
)

export default IndexPage
