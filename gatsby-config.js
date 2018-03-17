module.exports = {
  siteMetadata: {
    title: 'Benjamin H Boruff',
    name: 'Benjamin H Boruff',
    email: 'ben@boruff.me',
    gravatarUrl: `https://www.gravatar.com/avatar/42b6218c7f0e5969258c5ff941c6332b`,
    resumeUrl: 'https://stackoverflow.com/cv/benjaminboruff'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-jsx',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
};
