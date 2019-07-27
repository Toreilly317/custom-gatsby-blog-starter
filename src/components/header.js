import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import gatsbyLogo from "../images/gatsby-icon.png"

const StyledHeader = styled.header`
  background: #2d132c;
  display: flex;
  align-items: center;
`
const HeaderContainer = styled.div`
  padding: 1rem;

  img {
    margin: 0;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderContainer>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <img
          style={{ height: "100px", width: "100px", objectfit: "cover" }}
          src={gatsbyLogo}
          alt="gatsby logo"
        />
      </Link>
    </HeaderContainer>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
