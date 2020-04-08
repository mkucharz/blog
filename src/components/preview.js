import React from 'react'
import { Link, useStaticQuery } from 'gatsby'
import { FiUsers, FiDatabase, FiFolder, FiFile } from 'react-icons/fi'
import { TiInfinity } from 'react-icons/ti'
import Styled from 'styled-components'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'

export function InfinityIcon() {
  return <TiInfinity size="1.2em"/>
}

export function UserIcon({position='absolute'}) {
  const className = `${position} left-0`
  return <FiUsers size="1.5em" className={className} />
}

export function StorageIcon({position='absolute'}) {
  const className = `${position} left-0`
  return <FiDatabase size="1.5em" className={className} />
}

export function ProjectIcon({position='absolute'}) {
  const className = `${position} left-0`
  return <FiFolder size="1.5em" className={className} />
}

export function TaskIcon({position='absolute'}) {
  const className = `${position} left-0`
  return <FiFile size="1.5em" className={className} />
}


export function List({children}) {
  return (
    <ul className="pt-2">
      {children}
    </ul>
  )
}

export function Item({children}) {
  return (
    <li className="p-2 pl-16 relative">
      {children}
    </li>
  )
}

export function ProductPreview({ logo, link, name, children }) {

  const data = useStaticQuery(graphql`
    query filesQuery {
      allFile {
        edges {
          node {
            relativePath
            childImageSharp {
              fixed(width: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
  const image = data.allFile.edges
    .map(edge => edge.node)
    .find(item => item.relativePath === logo)

  return (
    <div className="m-auto max-w-2xl w-full mb-12 pb-12">
      <div
        className="flex items-center"
      >
        <Image 
          className="flex-shrink-0 mr-4"
          fixed={image.childImageSharp.fixed} alt={'author'}
        />
        <div>
          <div className="text-2xl font-semibold">
            {name}
          </div>

          <div className="">
            <a nofollow="true" noreferrer="true" target="_blank" href={link} className="">{link}</a>
          </div>
        </div>
      </div>
      <div className="m-auto max-w-2xl w-full pt-6 pl-6">
        {children}
      </div>
    </div>
  )
}
