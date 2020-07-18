import React from "react"
import "../css/default.css"
import SEO from "../components/seo/seo"
const baseStyle = require("../css/404.module.css")

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
