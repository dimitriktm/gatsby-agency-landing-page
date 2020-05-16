/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import CDN from "./CDN"
import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <CDN />
      <div>
        <main>{children}</main>
        <footer>
          <div>
            <h4>Our services</h4>
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
          </div>
          <div>
            <h4>Our links</h4>
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
          </div>
          <div>
            <h4>Contact Us</h4>
            <div className="line"></div>
            <ul>
              <li>
                <a href="#">
                  Al. Dummyodl 124/23 floor 123 Lipsum Street, 02-577 USA.
                </a>
              </li>
              <li>
                <a href="#">00 387 65 302 657</a>
              </li>
              <li>
                <a href="#">Imprint</a>
              </li>
              <li>
                <a href="#">mail@mail.com</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
