import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Monero_qr = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "xmr.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.file.childImageSharp.fluid}
      imgStyle={{ objectFit: "unset" }}
      style={{ width: "100%", height: "100%" }}
    />
  )
}
