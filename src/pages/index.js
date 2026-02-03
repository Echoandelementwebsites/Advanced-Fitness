import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Contact from "../components/Contact"

export const Head = () => (
  <>
    <title>Advanced Fitness - Nairobi's Premier Gym</title>
    <meta name="description" content="Join Advanced Fitness in Nairobi. State-of-the-art equipment, boxing, HIIT, and personal training. Transform your body today." />
  </>
)

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Contact />
    </Layout>
  )
}

export default IndexPage
