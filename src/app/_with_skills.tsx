import { DiscordIcon } from '@/components/_icons/DiscordIcon'
import { GithubIcon } from '@/components/_icons/GithubIcon'
import { GodotIcon } from '@/components/_icons/GodotIcon'
import { LinkedInIcon } from '@/components/_icons/LinkedInIcon'
import { StackOverflowIcon } from '@/components/_icons/StackoverflowIcon'
import { TwitchIcon } from '@/components/_icons/TwitchIcon'
import { TwitterIcon } from '@/components/_icons/TwitterIcon'
import { WordpressIcon } from '@/components/_icons/WordpressIcon'
import { YoutubeIcon } from '@/components/_icons/YoutubeIcon'
import Link from 'next/link'

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
      <div className="container mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center">
          <h1 className="text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">Hi, I'm Juan</h1>
          <p className="text-xl font-medium text-muted-foreground">...and I develop software</p>
          <p className="max-w-[600px] text-muted-foreground">
            My name is Juan, a veteran Staff Software Engineer located in Bilbao, Spain and I have been in the software
            engineering business for over 15 years. I am an expert at leading cross-functional teams, which involves
            enhancing performance and producing scalable solutions of high quality. My interest lies in using my
            technical skills and group work to bring successful projects that meet business goals.
          </p>
        </div>
        <div className="mt-8 flex items-center gap-4">
          {contactLinks.map(({ text, url, icon }) => (
            <a href={url} target="_blank" rel="noopener noreferrer" className="h-10 w-10">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </header>
    <main className="w-full">
      <section className="container mx-auto flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <div className="grid gap-4">
              <div>
                <h3 className="text-xl font-bold">Project 1</h3>
                <p className="text-muted-foreground">A web application built with React and TypeScript.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Project 1</h3>
                <p className="text-muted-foreground">A web application built with React and TypeScript.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Skills</h2>
            <div className="grid gap-4">
              <div className="flex items-center gap-2">
                <span>React</span>
              </div>
              <div className="flex items-center gap-2">
                <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Node.js</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Git</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Experience</h2>
            <div className="grid gap-4">
              <div>
                <h3 className="text-xl font-bold">Software Engineer</h3>
                <p className="text-muted-foreground">Acme Inc. - 2019 to present</p>
                <p className="text-muted-foreground">
                  Developed and maintained web applications using React and TypeScript. Collaborated with
                  cross-functional teams to deliver high-quality software solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Intern</h3>
                <p className="text-muted-foreground">Widgets Co. - Summer 2018</p>
                <p className="text-muted-foreground">
                  Gained experience in front-end development and participated in various projects using HTML, CSS, and
                  JavaScript.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="container mx-auto flex items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
      <p className="text-sm text-muted-foreground">&copy; 2024 John Doe. All rights reserved.</p>
      <nav className="flex items-center gap-4">
        <Link href="#" className="text-sm hover:underline" prefetch={false}>
          Privacy
        </Link>
        <Link href="#" className="text-sm hover:underline" prefetch={false}>
          Terms
        </Link>
      </nav>
    </footer>
  </div>
)

export default Page
