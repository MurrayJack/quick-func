import * as React from "react"
import Layout from "../../components/layout"
import Page from "../../components/Page"
import Seo from "../../components/seo"

const IndexPage = () => {
  const input = React.createRef<HTMLTextAreaElement>()
  const button = React.createRef<HTMLButtonElement>()
  const result = React.createRef<HTMLTextAreaElement>()

  React.useEffect(() => {
    button.current.addEventListener("click", () => {
      result.current.value = window.btoa(input.current.value)
      result.current.focus()
      result.current.select()
    })
  }, [])

  return (
    <Layout>
      <Seo title="Base64 Encode" />

      <Page>
        <h1>Base64 Encode</h1>

        <textarea ref={input} rows={10}></textarea>

        <button ref={button}>Encode</button>

        <textarea ref={result} rows={10}></textarea>
      </Page>
    </Layout>
  )
}

export default IndexPage
