import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;

  a {
    color: black;
    text-decoration: none;
  }

  p {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    margin-bottom: 0.5rem;
  }

  .read-more {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }

  .post-footer {
    display: flex;
    font-size: 0.8rem;
    }

    .post-date {
     
      flex: 1 1 0;
    }
  }
`

const BLOG_LIST_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

const BlogList = () => {
  const { allMarkdownRemark } = useStaticQuery(BLOG_LIST_QUERY)

  const { edges } = allMarkdownRemark

  return (
    <div>
      {edges.map(({ node }) => {
        const { frontmatter, excerpt } = node
        return (
          <>
            <Post>
              <div>
                <Link to={`/posts/${frontmatter.slug}`}>
                  <h2>{frontmatter.title}</h2>
                </Link>
              </div>

              <p>{excerpt}</p>
              <div className="post-footer">
                <div className="post-date">{frontmatter.date}</div>
                <div>
                  {" "}
                  <Link className="read-more" to={`/posts/${frontmatter.slug}`}>
                    Read More &#8594;
                  </Link>
                </div>
              </div>
            </Post>
          </>
        )
      })}
    </div>
  )
}

export default BlogList
