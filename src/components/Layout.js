import React from 'react'
import { Link } from 'gatsby'

import {Footer} from './Footer'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1 className="mx-auto max-w-2xl font-black px-4 sm:px-0 text-3xl sm:text-4xl">
          <Link className="no-underline text-black"
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <Link className="no-underline sm:mx-auto max-w-2xl block text-2xl mb-4 pt-4 px-4 sm:px-0"
          to={`/`}
        >
          &larr; {title}
        </Link>
      )
    }
    return (
      <React.Fragment>
        <main>
          {header}
          {children}
          <Footer />
        </main>
      </React.Fragment>
    )
  }
}

export default Layout
