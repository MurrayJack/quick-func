import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <p>
      <Link to="/functions/guid">GUID</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
