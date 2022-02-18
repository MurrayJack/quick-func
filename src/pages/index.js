import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <p>
      <Link to="/functions/guid">GUID</Link> <br />
      <Link to="/functions/base64encode">Base 64 Encode</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
