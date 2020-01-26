import React from 'react'
import { Link } from 'gatsby'

export const SuggestionBox = ({ posts, ...props }) => {
  const createPreview = post => {
    if (!post) {
      return ''
    }

    const title = post.frontmatter.title
    const description = post.frontmatter.description
    const image = post.frontmatter.ogimage.childImageSharp.fixed.src
    const slug = post.fields.slug

    return (
      <article key={title} className="flex-72 mx-4 pb-4 lg:w-1/2 md:mx-2 mb-8 bg-white rounded-sm overflow-hidden shadow relative">
        <Link to={slug} className="text-gray">
          <img
            className="h-56 w-full object-cover object-center"
            src={image}
            alt={description}
          />
          <div className="p-4 h-auto">
            <h3 className="block text-black leading-tight font-bold mb-4 text-xl md:text-base lg:text-xl">{title}</h3>
            <div className="text-gray-600 text-base leading-relaxed block">
              {description}
            </div>
          </div>
        </Link>
      </article>
    )
  }

  return (
    <div className="py-4 bg-secondary px-4">
      <section className="container mx-auto">
        <h2 className="py-6 m-auto text-center">Read more</h2>
        <div className="block flex flex-wrap justify-center m-auto max-w-2xl">
          {posts.map(post => createPreview(post))}
        </div>
      </section>
    </div>
  )
}
