import React from 'react'
import Link from 'gatsby-link'

const Header = (props) => (
  <div className="root">
    <style jsx>{`
      .root {
        background: black;
      }
      /* nav {
        display: grid;
        height: 20rem;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 110px
        grid-gap: 1em;
        grid-template-areas:
          "name resume about gravatar";

        align-items: center;
        justify-items: center;
      } */
      img {
        border-radius: 45px;
      }
      @media screen and (min-width: 900px) {
        nav {
          display: grid;
          height: 5rem;
          grid-template-columns: repeat(9, 1fr);
          grid-template-rows: 100px;
          grid-gap: 1em;
          grid-template-areas: "name name . . . . about resume gravatar";
          align-items: center;
          justify-items: center;
        }
        .about {
          align-self: end;
        }
        .resume {
          align-self: end;
        }
      }
      @media screen and (max-width: 899px) {
        nav {
          display: grid;
          height: 5rem;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: 100px;
          grid-gap: 1em;
          grid-template-areas: "name name about resume";
          align-items: center;
          justify-items: center;
        }
        .gravatar {
          display: none;
        }
      }
      @media screen and (max-width: 400px) {
        nav {
          display: grid;
          height: 5rem;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 100px;
          grid-gap: 1em;
          grid-template-areas: "name name";
          align-items: center;
          justify-items: center;
        }
        .gravatar, .about, .resume {
          display: none;
        }
      }
      .name {
        grid-area: name;
      }
      .job {
        grid-area: name;
        align-self: end;
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
        <h4 className="name">
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
            {props.name}
          </Link>
        </h4>
        <h6 className="job" style={{ color: 'white'}}>JS Developer</h6>
        <span></span>
        <h5 className="resume">
          <a style={{ color: 'white', textDecoration: 'none' }} href={props.resumeUrl} >
            Resum&#233;
          </a>
        </h5>
        <h5 className="about">
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/about/">
            About
          </Link>
        </h5>
        <img className="gravatar" src={props.gravatarUrl} />
      </nav>
    </header>
  </div>
)

export default Header
