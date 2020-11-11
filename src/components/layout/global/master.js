/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// i18n import
import "@/i18n/config"

import Header from "./header"
import Footer from "./footer"

// Bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css" // Core import

import "./master.scss"

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
    <div id="siteBody" className="d-flex flex-column">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="page-content">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
