import * as React from "react"

const IndexPage = () => {
  const client = typeof window !== "undefined"

  const buildGuid = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (
        c ^
        (client &&
          window.crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    )
  }

  const [guid, setGuid] = React.useState(buildGuid())

  return (
    <>
      <input type="text" readOnly value={guid}></input>

      <button onClick={() => setGuid(buildGuid())}>do it</button>

      <textarea>
        {`function buildGuid() {
            return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        }`}
      </textarea>
    </>
  )
}

export default IndexPage
