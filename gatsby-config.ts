import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {  
  jsxRuntime: "automatic",
  siteMetadata: {
    title: `Grekz - Software Developer`,
    twitterUsername: `@CodingGrekz`,
    siteUrl: `https://www.grekz.com`,
    description: `Hire an experienced Full Stack Software Engineer. Reach out now!`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-pnpm',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/logo_transparent.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'www.grekz.com',
        region: 'eu-south-2',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `/svg/`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `react-jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
}

export default config
