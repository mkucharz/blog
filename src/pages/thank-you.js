import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/seo'

import {SuggestionBox} from '../components/suggested'


class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges.map(elem => elem.node)
    const { author, social } = data.site.siteMetadata

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title='Thank you!'
          location={this.props.location}
          keywords={[
            `blog`,
            `product development`,
            `product management`,
            `flow platform`,
            `speed up product development`
          ]}
        />
        <div>
          <div className="container mx-auto pb-4 px-4 sm:px-0">
            <div className="m-auto py-8 max-w-2xl w-full mt-10 mb-12">
            <div className="flex flex-col items-center justify-center">
              <Image
                className="mr-4 rounded-full"
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
              />
              <h1 className="font-bold leading-tight text-center">Thank you!</h1>
              <p className="m-0 text-center max-w-sm sm:text-lg">  
                Building products is exciting journey with many areas to explore,
                great that we will be doing that together! Feel free to connect with me 
                on <a className="hover:underline" nofollow noreferrer target="_blank" href={social.linkedIn}>LinkedIn</a> or <a className="hover:underline" nofollow noreferrer target="_blank" href={social.twitter}>Twitter</a>.
              </p>
            </div>
          </div>
          </div>
          <SuggestionBox posts={posts} />
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        social {
          twitter
          linkedIn
        }
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            ogimage {
              childImageSharp {
                fixed {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
