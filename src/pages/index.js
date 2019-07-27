import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BlogList from "../components/BlogList"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <BlogList />
  </Layout>
)

export default IndexPage
