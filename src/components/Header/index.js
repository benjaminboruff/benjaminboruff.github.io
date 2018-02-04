import React from 'react'
import Link from 'gatsby-link'
import Gravatar from 'react-gravatar'

const Header = () => (
  <div className="root">
    <style jsx>{`
      .root {
        background: rebeccapurple;
        margin-bottom: 1.45rem;
      }
      .container {
        margin: 0 auto;
        max-width: 960px;
        padding: 1.45rem 1.0875rem;
        color: white;
      }
      h1 {
        margin: 0;
      }
      h3 {
        margin-top: -2rem;
      }
    `}
    </style>
    <div className="container">
      <h1>
        <Link style={{color: 'white', textDecoration: 'none'}} to="/">
          Benjamin H Boruff
        </Link>
        <Gravatar style={{borderRadius: '23px', marginLeft: '1rem', marginTop: '0', marginBottom: '-0.75rem', float: 'right'}} email="ben@boruff.me" />
      </h1>
      
      <h3>
        <a style={{color: 'white', textDecoration: 'none', float: 'right', marginRight: '1rem'}} href="https://stackoverflow.com/cv/benjaminboruff">
            Resum&#233;
        </a>
        <Link style={{color: 'white', textDecoration: 'none', float: 'right', marginRight: '1rem'}} to="/about/">
            About
        </Link>
      </h3>    
    </div>
  </div>
)

export default Header
