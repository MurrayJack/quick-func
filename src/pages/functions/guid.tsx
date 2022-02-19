import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Code } from "../../components/code"
import Page from "../../components/Page"
import { createRef } from "react"

const IndexPage = () => {
  const [guid, setGuid] = React.useState("")

  const button = createRef<HTMLButtonElement>()

  React.useEffect(() => {
    const buildGuid = () => {
      return (([1e7] as any) + -1e3 + -4e3 + -8e3 + -1e11).replace(
        /[018]/g,
        c =>
          (
            c ^
            (window.crypto.getRandomValues(new Uint8Array(1))[0] &
              (15 >> (c / 4)))
          ).toString(16)
      )
    }

    button.current.addEventListener("click", () => {
      setGuid(buildGuid())
    })

    setGuid(buildGuid())
  }, [])

  return (
    <Layout>
      <Seo title="Create GUID" />

      <p>Creating a new GUID</p>

      <Page>
        <input type="text" readOnly value={guid}></input>

        <button ref={button}>New</button>

        <Code>
          {`
const result = window.btoa("input string");
`}
        </Code>
      </Page>
    </Layout>
  )
}

export default IndexPage
