import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { QR } from "./type"

export const QrMonero = () => {
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
      alt={QR.XMR}
    />
  )
}
