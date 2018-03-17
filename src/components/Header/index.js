import React from 'react'
import Link from 'gatsby-link'

const Header = (props) => (
  <div className="root">
    <style jsx>{`
      .root {
        background: black;
      }
      nav {
        display: grid;
        height: 20rem;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-auto-rows: auto;
        grid-gap: 1em;
        grid-template-areas:
          "name resume about gravatar";

        align-items: center;
        justify-items: center;
      }
      img {
        border-radius: 45px;
      }
      @media screen and (min-width: 900px) {
        nav {
          display: grid;
          height: 5rem;
          grid-template-columns: repeat(9, 1fr);
          grid-auto-rows: auto;
          grid-gap: 1em;
          grid-template-areas: "name name about resume . . . . gravatar";
          align-items: center;
          justify-items: center;
        }
      }
      .name {
        grid-area: name;
        
        margin-left: 15px;
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
    <header>
      <nav>
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
        <img className="gravatar" src={props.gravatarUrl} />
      </nav>
    </header>
  </div>
)

export default Header
