import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import {SuggestionBox} from '../components/suggested'
import Styled from 'styled-components'


const NewsletterBox = Styled.iframe`
    border: none;
    width: 100%;
    height: 340px;
`

const StyledContent = Styled.div`
  p {
    max-width: 42rem;
    margin: 0 auto 1.5rem;
  }

  ul {
    max-width: 42rem;
    margin: 0 auto 1.5rem;
    padding-left: 2rem;
    /* list-style-type: square; */
  }

  h2, h3, h4, h5 {
    max-width: 42rem;
    margin: 0 auto 1rem;
  }

  p+h2 {
    margin-top: 3rem;
  }

  .twitter-tweet {
    max-width: 42rem;
    margin: 0 auto 1.5rem;
  }

  .caption {
    text-align: center;
    font-style: italic;
    margin-bottom: 2rem;
  }

  .tableHeader {
    margin: 2rem 0;
    width: 100%;
      : none;
  }

  table {
    width: 100%;
    margin: 2rem 0;
    border-collapse: collapse;
    a {
      color: #c19501;
      letter-spacing: .5px;
    }
    th {
      padding: 1rem 0;
    }
    td {
      padding: .5rem;
      border-bottom: 1px solid #ccc;
    }
    tr:hover {
      td {
        background-color: #f9f9f9;
      }
    }
    thead {
      position: sticky;
      top: 0;
      background: #fff;
    }
  }
`


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    const { ogimage, description, title, date } = post.frontmatter
    const ogImagePath = ogimage && ogimage.childImageSharp.fixed.src

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO 
          title={title}
          location={this.props.location}
          description={description || post.excerpt}
          image={ogImagePath}
        />
        <div className="container px-4 mx-auto pt-8 pb-4">
          <header className="max-w-2xl m-auto mb-8">
            <h1 className="text-black leading-none font-black text-4xl sm:text-5xl mb-1">{title}</h1>
            <span className="text-sm">{date}</span>
          </header>
          
          <StyledContent>
            <MDXRenderer>{post.body}</MDXRenderer>
          </StyledContent>

          <Bio />
          <NewsletterBox title="newsletter" src="https://productmess.ck.page/798d364f19"/>
        </div>
        <SuggestionBox posts={[previous, next]} className="mb-2" />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        ogimage { 
         childImageSharp {
            fixed {
              src
            }
          }
        }
      }
      body
    }
  }
`
