import { HeadFC, PageProps, graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { DiscordIcon } from '../icons/DiscordIcon'
import { GithubIcon } from '../icons/GithubIcon'
import { GodotIcon } from '../icons/GodotIcon'
import { LinkedInIcon } from '../icons/LinkedInIcon'
import { StackOverflowIcon } from '../icons/StackoverflowIcon'
import { TwitchIcon } from '../icons/TwitchIcon'
import { WordpressIcon } from '../icons/WordpressIcon'
import { YoutubeIcon } from '../icons/YoutubeIcon'
import '../styles/global.css'

const pageStyles = {
  color: 'var(--text, #021222)',
  background: 'var(--background, #fafcff)',
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
    icon: <LinkedInIcon />,
  },
  {
    text: 'Github',
    url: 'https://github.com/grekz',
    icon: <GithubIcon />,
  },
  {
    text: 'StackOverflow',
    url: 'https://stackoverflow.com/users/551773/grekz',
    icon: <StackOverflowIcon />,
  },
  {
    text: 'Wordpress',
    url: 'https://grekz.wordpress.com/',
    icon: <WordpressIcon />,
  },
  {
    text: 'Twitch',
    url: 'https://twitch.com/coding_grekz',
    icon: <TwitchIcon />,
  },
  {
    text: 'Twitter',
    url: 'https://twitter.com/CodingGrekz',
    icon: <TwitchIcon />,
  },
  {
    text: 'Youtube',
    url: 'https://www.youtube.com/@CodingGrekz',
    icon: <YoutubeIcon />,
  },
  {
    text: 'Discord',
    url: 'https://discord.gg/6jd3GF7x',
    icon: <DiscordIcon />,
  },
  {
    text: 'Godot',
    url: 'https://games.grekz.com',
    icon: <GodotIcon />,
  },
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Hi, I'm Juan.</h1>
      <h2>...and I develop software</h2>
      <br />
      <h3>You can find me in the following places:</h3>
      <ul style={ulStyles}>
        {contactLinks.map(({ url, text, icon }) => (
          <li key={`svg_li_${text}`}>
            <a href={url}>{icon}</a>
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
