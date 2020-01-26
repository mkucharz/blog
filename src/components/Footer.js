import React from 'react'
import { Link } from 'gatsby'
import Styled from 'styled-components'

const StyledFooter = Styled.footer`
a {
    /* color: #c19501; */
    /* border-bottom: 1px solid currentColor; */
    /* display: block; */
}
`

export const Footer = () => (
  <StyledFooter className="bg-footer-gray">
    <div className="max-w-2xl m-auto px-4 sm:px-0 py-8">
        <div className="font-black text-2xl">
            <Link className="no-underline text-white"
            to={`/`}
            >
            productmess.com
            </Link>
        </div>
        <ul className="list-none font-medium">
        <li className="mr-2">
            <a href="https://twitter.com/mkucharz">twitter</a>
        </li>
        <li className="mr-2">
            <a href="https://www.linkedin.com/in/maciejkucharz">linkedIn</a>
        </li>
        <li className="mr-2">
            <a href="https://drift.me/maciejkucharz/meeting">book a meeting</a>
        </li>
        </ul>
    </div>
  </StyledFooter>
)
