import * as React from "react"
import Layout from "../../components/layout"
import Page from "../../components/Page"
import Seo from "../../components/seo"
import { Code } from "../../components/code"

const IndexPage = () => {
  const input = React.createRef<HTMLTextAreaElement>()
  const button = React.createRef<HTMLButtonElement>()
  const result = React.createRef<HTMLTextAreaElement>()

  React.useEffect(() => {
    button.current.addEventListener("click", () => {
      if (input?.current?.value) {
        result.current.value = window.btoa(input?.current?.value)
        result.current.focus()
        result.current.select()
      }
    })
  }, [])

  return (
    <Layout>
      <Seo title="Base64 Encode" description="Encode a string into base64" />

      <Page>
        <h2>Base64 Encode</h2>

        <p>Encode a string into Base 64</p>

        <textarea
          placeholder="string"
          style={{ resize: "none" }}
          ref={input}
          rows={5}
        ></textarea>

        <button ref={button}>Encode</button>

        <textarea
          readOnly
          style={{ resize: "none" }}
          ref={result}
          rows={5}
        ></textarea>

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
