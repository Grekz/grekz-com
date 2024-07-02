import { DiscordIcon } from '@/components/_icons/DiscordIcon'
import { GithubIcon } from '@/components/_icons/GithubIcon'
import { GodotIcon } from '@/components/_icons/GodotIcon'
import { LinkedInIcon } from '@/components/_icons/LinkedInIcon'
import { StackOverflowIcon } from '@/components/_icons/StackoverflowIcon'
import { TwitchIcon } from '@/components/_icons/TwitchIcon'
import { TwitterIcon } from '@/components/_icons/TwitterIcon'
import { WordpressIcon } from '@/components/_icons/WordpressIcon'
import { YoutubeIcon } from '@/components/_icons/YoutubeIcon'

const currentYear = new Date().getFullYear()
const contactLinks = [
  { text: 'LinkedIn', url: 'https://www.linkedin.com/in/grekz/', icon: <LinkedInIcon /> },
  { text: 'Github', url: 'https://github.com/grekz', icon: <GithubIcon /> },
  { text: 'StackOverflow', url: 'https://stackoverflow.com/users/551773/grekz', icon: <StackOverflowIcon /> },
  { text: 'Wordpress', url: 'https://grekz.wordpress.com/', icon: <WordpressIcon /> },
  { text: 'Twitch', url: 'https://twitch.com/coding_grekz', icon: <TwitchIcon /> },
  { text: 'Twitter', url: 'https://twitter.com/CodingGrekz', icon: <TwitterIcon /> },
  { text: 'Youtube', url: 'https://www.youtube.com/@CodingGrekz', icon: <YoutubeIcon /> },
  { text: 'Discord', url: 'https://discord.gg/6jd3GF7x', icon: <DiscordIcon /> },
  { text: 'Godot', url: 'https://games.grekz.com', icon: <GodotIcon /> },
]

const Page = () => (
  <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
    <header className="w-full bg-cover bg-center bg-no-repeat py-24 sm:py-32 lg:py-40 xl:py-48">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">Hi, I'm Juan</h1>
          <p className="text-xl font-medium text-muted-foreground">...and I develop software</p>
          <p className="max-w-[860px] text-muted-foreground">
            My name is Juan, a veteran Staff Software Engineer located in Bilbao, Spain and I have been in the software
            engineering business for over 15 years. I am an expert at leading cross-functional teams, which involves
            enhancing performance and producing scalable solutions of high quality. My interest lies in using my
            technical skills and group work to bring successful projects that meet business goals.
          </p>
        </div>
        <div className="mt-12">
          <p className="tracking-wider text-lg font-bold">You can find me in the following places:</p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
          {contactLinks.map(({ text, url, icon }) => (
            <a
              key={text}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={text}
              className="h-12 w-12 items-center justify-center flex"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </header>
    <footer className="container mx-auto flex items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
      <p className="text-sm text-muted-foreground">&copy; {currentYear} Grekz. All rights reserved.</p>
    </footer>
  </div>
)

export default Page
