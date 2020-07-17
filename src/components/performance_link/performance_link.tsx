import React from "react"
import { Helmet } from "react-helmet"

export const PerformanceLink = () => {
  return (
    <Helmet>
      <link rel="preconnect" href="https://api.github.com" />
    </Helmet>
  )
}
