module.exports = {
  siteMetadata: {
    title: 'Benjamin H Boruff',
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
