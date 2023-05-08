import * as React from 'react'
import { HeadFC, PageProps, withPrefix } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import '../styles/global.css'

const pageStyles = {
  color: '#232129',
  padding: 0,
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
  gap: '2rem',
  justifyContent: 'center',
  padding: 0,
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
  {
    text: 'Godot',
    url: 'https://games.grekz.com',
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
          <li key={`svg_li_${text}`}>
            <a href={url}>
              <img width={32} height={32} src={withPrefix(`./images/icons/${text.toLowerCase()}.svg`)} alt={text} />
            </a>
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
