import React from 'react'
import Link from 'gatsby-link'

const Header = (props) => (
  <div className="root">
    <style jsx>{`
      .root {
        background: black;
      }
      .wrapper {
        display: grid;
        height: 20rem;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
        grid-template-areas:
          "name resume about gravatar";

        align-items: center;
        justify-items: center;
      }
      img {
        border-radius: 45px;
      }
      @media (min-width: 700px) {
        .wrapper {
          display: grid;
          height: 5rem;
          grid-template-columns: 3fr 1fr 1fr 1fr 1fr 1fr 1fr;
          grid-gap: 10px;
          grid-template-areas: "name . . . resume about gravatar";
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
      <img className="gravatar" src={props.gravatarUrl} />
    </div>
  </div>
)

export default Header
