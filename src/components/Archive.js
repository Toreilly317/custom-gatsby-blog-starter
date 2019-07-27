import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  a {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }
`

const POST_ARCHIVE_QUERY = graphql`
  query PostArchive {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD,YYYY")
          }
        }
      }
    }
  }
`

const Archive = () => {
  const { allMarkdownRemark } = useStaticQuery(POST_ARCHIVE_QUERY)

  return (
    <>
      <aside>
        <h3>Archive</h3>
        <ArchiveList>
          {allMarkdownRemark.edges.map(edge => {
            const { slug, title, date, tags } = edge.node.frontmatter
            return (
              <li key={slug}>
                <Link to={`/posts/${slug}`}>{title}</Link>
              </li>
            )
          })}
        </ArchiveList>
      </aside>
    </>
  )
}

export default Archive
