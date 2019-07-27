/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Archive from "./Archive"
import styled from "styled-components"
import Header from "./header"
import "./layout.css"
import Img from "gatsby-image"
import { useSpring, animated } from "react-spring"

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
`

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      file(relativePath: { regex: "/gatsby-astronaut/" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const isHomePage = location.pathname === "/" ? true : false
  const springStyles = useSpring({
    from: { height: isHomePage ? 100 : 200 },
    to: { height: isHomePage ? 200 : 100 },
  })

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <animated.div style={{ ...springStyles, overflow: "hidden" }}>
        <Img fluid={data.file.childImageSharp.fluid} />
      </animated.div>
      {/* {location.pathname === "/" && (
        
      )} */}

      <MainLayout>
        <div>{children}</div>
        <Archive />
      </MainLayout>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {},
}

export default Layout
