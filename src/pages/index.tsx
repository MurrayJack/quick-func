import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { VStack } from "../components/vstack"
import { useEffect } from "react"
import { useState } from "react"

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

const IndexPage = ({ data }) => {
  const [files] = useState(data.allFile.nodes)

  useEffect(() => {})

  return (
    <Layout>
      <Seo title="Home" />

      <VStack>
        <input placeholder="search"></input>

        <ul>
          {files.map(e => (
            <li>
              <Link to={`functions/${e.name}`}>{e.name}</Link>{" "}
            </li>
          ))}
        </ul>
      </VStack>
    </Layout>
  )
}

export default IndexPage
