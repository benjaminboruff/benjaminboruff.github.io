module.exports = {
  siteMetadata: {
    title: 'Benjamin H Boruff',
    name: 'Benjamin H Boruff',
    email: 'ben@boruff.me',
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
