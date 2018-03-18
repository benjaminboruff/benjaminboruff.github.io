import React from 'react'
import Link from 'gatsby-link'

const Header = (props) => (
  <div className="root">
    <style jsx>{`
      .root {
        background: black;
      }
      img {
        border-radius: 45px;
      }
      @media only screen and (max-width: 600px) {
        nav {
          display: grid;
          height: 5rem;
          grid-template-columns: 50px 1fr 1fr;
          grid-template-rows: 100px;
          grid-gap: 1em;
          grid-template-areas: "icon name name";
          align-items: center;
          justify-items: center;
        }
        .gravatar, .about, .resume {
          display: none;
        }
        .icon {
          align-self: start;
          justify-self: start;
          margin: 5px;
        }
        .name, .job {
          justify-self: start;
        }
      }
      @media only screen and (min-width: 600px) and (max-width: 767px) {
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
        .gravatar, .icon {
          display: none;
        }
      }
      @media only screen and (min-width: 768px) {
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
        .gravatar {
          padding-right: 10px;
        }
        .icon {
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
      .icon {
        grid-area: icon;
      }
    `}
    </style>
    <header>
      <nav>
        <i className="icon fas fa-bars fa-lg" style={{color: 'white'}}></i>
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
