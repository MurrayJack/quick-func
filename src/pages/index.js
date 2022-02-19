import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
  query MyQuery {
    allFile(
      filter: { sourceInstanceName: { eq: "functions" } }
      sort: { fields: name }
    ) {
      nodes {
        name
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />

    <ul>
      {data.allFile.nodes.map(e => (
        <li>
          <Link to={`functions/${e.name}`}>{e.name}</Link>{" "}
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage
