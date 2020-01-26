import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

// import { rhythm } from '../utils/typography'

function MainBio() {
  return (
    <StaticQuery
      query={MainBioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div className="m-auto flex items-start max-w-2xl w-full mt-10 mb-12"
          >
            
            <Image
              className="flex-shrink-0 mr-4 rounded-full"
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
            />
            <p className="m-0">
            Hi, my name is {author}. My life mission is to <strong>speed up product development</strong>.
            I'm writing here about my findings, my initiatives, and everything related to digital product building process.
            </p>
          </div>
        )
      }}
    />
  )
}

const MainBioQuery = graphql`
  query MainBioQuery {
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

export default MainBio
