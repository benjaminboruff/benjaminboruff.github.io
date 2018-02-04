import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
// import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Benjamin H Boruff"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
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