import React from "react"
import SEO from "../components/seo/seo"
import "../css/default.css"
const baseStyle = require("../css/not_found.module.css")

const NotFoundPage = () => (
  <>
    <SEO title="404 not found" />
    <div className={baseStyle.container}>
      asd
      <div className={baseStyle.img} />
    </div>
  </>
)

export default NotFoundPage
