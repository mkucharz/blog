import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Montserrat, sans-serif;
    background-color: #fff;
    color: #333333;
  }
  a {
    color: #c19501;
  }
  h1, h2, h3 {
    color: black;
  }
  h3 a {
    color: black;
  }
  a.nameSmall {
    font-weight: 700;
    text-decoration: none;
    box-shadow: none;
    line-height: 1;
  }
  .caption {
    text-align: center;
    font-style: italic;
  }
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.0),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <React.Fragment>
        <GlobalStyle />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {header}
          {children}
          <footer>
            {` `}
            {` `}
            <a href="https://www.gatsbyjs.org">twitter</a> |{` `}
            <a href="https://www.gatsbyjs.org">linkedIn</a>
          </footer>
        </div>
      </React.Fragment>
    )
  }
}

export default Layout
