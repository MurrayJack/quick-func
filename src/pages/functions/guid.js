import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import loadable from "@loadable/component"

const OtherComponent = loadable(() => import("./guild-code"))

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Create GUID" />

      <OtherComponent />
    </Layout>
  )
}

export default IndexPage
