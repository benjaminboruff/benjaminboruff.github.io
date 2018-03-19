import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'

fontawesome.library.add(brands, faBars)

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header
            name={data.site.siteMetadata.name}
            email={data.site.siteMetadata.email}
            gravatarUrl={data.site.siteMetadata.gravatarUrl}
            twitterUrl={data.site.siteMetadata.twitterUrl}
            githubUrl={data.site.siteMetadata.githubUrl} />
    <div className="root">
    <style jsx>{`
      .root {
        margin: 0 auto;
        max-width: 960px;
        padding: 0px 1.0875rem 1.45rem;
        padding-top: 0;
      }
    `}
    </style>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query personalSiteQuery {
    site {
      siteMetadata {
        title
        name
        email
        gravatarUrl
        twitterUrl
        githubUrl
      }
    }
  }
`
