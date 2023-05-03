import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

const pageStyles = {
  color: '#232129',
  padding: '1rem',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  margin: 'auto',
  width: '75%',
  textAlign: 'center' as const,
  height: '100vh',
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'center',
}
const headingStyles = {
  marginTop: 0,
  marginBottom: '1rem',
  fontSize: '5rem',
}

const ulStyles = {
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap' as const,
  gap: '1rem',
  justifyContent: 'center',
}
const contactLinks = [
  {
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/grekz/',
  },
  {
    text: 'Github',
    url: 'https://stackoverflow.com/users/551773/grekz',
  },
  {
    text: 'StackOverflow',
    url: 'https://stackoverflow.com/users/551773/grekz',
  },
  {
    text: 'Wordpress',
    url: 'https://grekz.wordpress.com/',
  },
  {
    text: 'Twitch',
    url: 'https://twitter.com/coding_grekz',
  },
  {
    text: 'Twitter',
    url: 'https://twitter.com/CodingGrekz',
  },
  {
    text: 'Youtube',
    url: 'https://www.youtube.com/@CodingGrekz',
  },
  {
    text: 'Discord',
    url: 'https://discord.gg/6jd3GF7x',
  },
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Hi, I'm Juan.</h1>
      <h2>...and I develop software</h2>
      <hr />
      <h3>You can find me in the following places:</h3>
      <ul style={ulStyles}>
        {contactLinks.map(({ url, text }) => (
          <li key={text}>
            <a href={url}>{text}</a>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <>
      <html lang="en" />
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
    </>
  )
}
