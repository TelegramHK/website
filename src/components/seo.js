/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            author
            image
          }
        }
      }
    `
  )

  const metaImage = site.siteMetadata.image
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = title

  return (
    <React.Fragment>
      <Helmet>
        {/* General tags */}
        <title>{defaultTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" type="image/png" href={metaImage} />

        {/* OpenGraph tags */}
        <meta property="og:title" content={defaultTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
      </Helmet>
    </React.Fragment>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
