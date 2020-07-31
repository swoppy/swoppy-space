/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, title, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            defaultImage
            twitter
          }
        }
      }
    `
  )

  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    defaultImage,
    twitter,
  } = site.siteMetadata

  const metaDescription = description || defaultDescription
  const metaImage = `${siteUrl}${image || defaultImage}`
  const metaTitle = title || defaultTitle
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      {...(title
        ? {
            titleTemplate: `%s — ${metaTitle}`,
            title,
          }
        : {
            title: `${metaTitle}`,
          })}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: metaImage,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:url`,
          content: siteUrl,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:creator`,
          content: twitter,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:site`,
          content: twitter,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  image: null,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  image: PropTypes.string,
}

export default SEO
