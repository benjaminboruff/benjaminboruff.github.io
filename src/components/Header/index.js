import React from 'react'
import Link from 'gatsby-link'
import Gravatar from 'react-gravatar'

const Header = (props) => (
  <div className="root">
    <style jsx>{`
      .root {
        background: rebeccapurple;
      }
      .wrapper {
        display: grid;
        height: 20rem;
        grid-template-columns: 2fr;
        grid-gap: 10px;
        grid-template-areas:
          "name . "
          "resume . "
          "about gravatar";
        align-items: center;
        justify-items: center;
      }
      @media (min-width: 700px) {
        .wrapper {
          display: grid;
          height: 5rem;
          grid-template-columns: repeat(6,1fr);
          grid-gap: 20px;
          grid-template-areas: "name name . resume about gravatar";
          align-items: center;
          justify-items: center;
        }
      }
      .name {
        grid-area: name;
      }
      .resume {
        grid-area: resume;
      }
      .about {
        grid-area: about;
      }
      .gravatar {
        grid-area: gravatar;
      }
    `}
    </style>
    <div className="wrapper">
      <h2 className="name">
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
          {props.name}
        </Link>
      </h2>
      <span></span>
      <h4 className="resume">
        <a style={{ color: 'white', textDecoration: 'none' }} href={props.resumeUrl} >
          Resum&#233;
        </a>
      </h4>
      <h4 className="about">
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/about/">
          About
        </Link>
      </h4>
      <Gravatar className="gravatar" style={{ borderRadius: '23px', margin: '0'}} email={props.email} />
    </div>
  </div>
)

export default Header
