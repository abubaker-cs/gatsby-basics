import React from "react"
import Layout from "../components/Layout"
import { page, text } from "../examples/home.module.css"
import { ExampleButton } from "../examples/button"

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <ExampleButton>Click Me</ExampleButton>
        <h1>Home page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit mollitia
          blanditiis, perferendis ducimus iure assumenda. Ex quam, dolore atque
          amet culpa nihil hic quidem ipsam?
        </p>
      </div>
    </Layout>
  )
}
