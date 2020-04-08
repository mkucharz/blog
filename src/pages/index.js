import React from 'react'
import { Link, graphql } from 'gatsby'

import MainBio from '../components/MainBio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
// import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title='All posts'
          location={this.props.location}
          keywords={[
            `blog`,
            `product development`,
            `product management`,
            `flow platform`,
            `speed up product development`
          ]}
        />
        <div className="container mx-auto pb-4 px-4 sm:px-0">
          <MainBio className="mx-4" />
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article className="max-w-2xl m-auto mb-10" key={node.fields.slug}>
                <h2 className="m-0 font-heading text-black text-2xl">
                  <Link className="text-black font-black" to={node.fields.slug}>
                    {title}
                  </Link>
                </h2>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </article>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
