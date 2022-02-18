import * as React from "react"
import Layout from "../../components/layout"
import Page from "../../components/Page"
import Seo from "../../components/seo"

const IndexPage = () => {
  const button = React.createRef<HTMLButtonElement>()
  const result = React.createRef<HTMLTextAreaElement>()

  React.useEffect(() => {
    button.current.addEventListener("click", () => {
      result.current.value = window.btoa("sadjbsadhsaj")
      result.current.focus()
      result.current.select()
      //window.TextEncoder
    })
  }, [])

  return (
    <Layout>
      <Seo title="Base64 Encode" />

      <Page>
        <h1>Base64 Encode</h1>

        <textarea rows={10}></textarea>

        <button ref={button}>Encode</button>

        <textarea ref={result} rows={10}></textarea>
      </Page>
    </Layout>
  )
}

export default IndexPage
