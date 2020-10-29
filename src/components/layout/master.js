/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

// import Location from router
import { useLocation } from "@reach/router"

// Bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css" // Core import

import "./master.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title
        }
      }
      allSitePage {
        edges {
          node {
            path
          }
        }
      }
    }
  `)

  const location = useLocation()

  let allSitePageNodes = Object.keys(data.allSitePage.edges).map(key=>{
    return data.allSitePage.edges[key]["node"]["path"]
  })

  return (
    <div id="siteBody" className="d-flex flex-column">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="page-content">
        <main>{children}</main>
      </div>
      {
        // Check if page exists, hide footer if not
        Object.values(allSitePageNodes).indexOf(location.pathname) > -1 ? <Footer /> : ""
      }
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
