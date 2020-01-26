import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

// import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            className="m-auto flex items-center max-w-2xl w-full mb-12 pt-4 border-t-2
          border-light-gray border-solid"
          >
            <Image
              className="flex-shrink-0 mr-4 rounded-full"
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
            />
            <div>
              <div>
                <a className="nameSmall" href="/">
                  productmess.com
                </a>
              </div>
              <div>by Maciej Kucharz</div>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
