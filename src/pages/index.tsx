import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo";
import "./css/default.css";
import baseStyles from "./css/index.module.css";

const IndexPage = () => (
  <>
    <SEO title=""/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p className={baseStyles.test}>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="donate">Go to donate page</Link> <br />
  </>
);

export default IndexPage;
