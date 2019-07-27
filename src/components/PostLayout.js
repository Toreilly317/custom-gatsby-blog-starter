import React from "react"
import Layout from "./layout"
import { graphql, usePageQuery } from "gatsby"
import TimeToRead from "./WordCount"

export default function PostLayout(props) {
  const { markdownRemark } = props.data
  const { title, slug, date } = markdownRemark.frontmatter
  const { words } = markdownRemark.wordCount
  const { html } = markdownRemark
  return (
    <Layout location={props.location}>
      <h1>{title}</h1>
      <TimeToRead wordCount={words} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <p>{date}</p>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      wordCount {
        words
      }
      frontmatter {
        title
        date
        slug
      }
      html
    }
  }
`
