import React from "react"
import Layout from "../components/Layout"
import * as aboutStyles from "../examples/about.module.css"

const about = () => {
  return (
    <Layout>
      <div className={aboutStyles.page}>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, nihil
          aliquid. Aspernatur beatae debitis iure voluptas perferendis
          laudantium corporis consectetur!
        </p>

        <h1>Section</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </Layout>
  )
}

export default about
