import React from 'react'
import Link from 'gatsby-link'

const Header = (props) => (
  <div className="root">
    <style jsx>{`
      nav {
        height: 85px;
        background: black;
        display: grid;
        grid-gap: .5em;
      }

      @media only screen and (max-width: 600px) {
        nav {
          grid-template-columns: repeat(4, 1fr);
          grid-template-areas: "icon name name far-right";
        }
        .gravatar, .about, .resume {
          display: none;
        }
        .big-icon {
          display: none;
        }
        .icon {
          margin-left: 10px;
          margin-top: 10px;
        }
        .name {
          align-self: center;
          justify-self: center;
        }
        .far-right {
          display: grid;
          /* grid-column-gap: .7em; */
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          grid-template-areas: "social";
          justify-self: end;
          align-self: center;
          margin-right: 10px;
        }
        .social {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 1fr;
          grid-template-areas: "github" "twitter";
          justify-self: end;
        }
      }
      @media only screen and (min-width: 600px) and (max-width: 767px) {
        nav {
          grid-template-columns: repeat(4, 1fr);
          grid-template-areas: "icon name name far-right";
        }
        .icon {
          margin-left: 20px;
          margin-top: 15px;
        }
        .big-icon {
          display: none;
        }
        .name {
          align-self: center;
          justify-self: center;
        }
        .gravatar {
          display: none;
        }
        .far-right {
          display: grid;
          grid-column-gap: .7em;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          grid-template-areas: "social";
          justify-self: end;
          align-self: center;
          margin-right: 20px;
        }
        .social {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 1fr;
          grid-template-areas: "github" "twitter";
          justify-self: end;
        }
      }
      @media only screen and (min-width: 768px) {
        nav {
          grid-template-columns: repeat(3, 1fr);
          grid-template-areas: "icon name far-right";
        }
        .icon {
          display: none;
        }
        .big-icon {
          justify-self: start;
          align-self: center;
          margin-left: 20px;
        }
        .name {
          align-self: center;
          justify-self: center;
        }
        .far-right {
          display: grid;
          grid-column-gap: .7em;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr;
          grid-template-areas: "social gravatar";
          justify-self: end;
          align-self: center;
          margin-right: 20px;
        }
        .gravatar {
          align-self: center;
        }
        .social {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 1fr;
          grid-template-areas: "github" "twitter";
          justify-self: end;
        }
      }

      /*** grid areas ***/

      .name {
        grid-area: name;
        margin:0;
        padding: 0;
      }
      .resume {
        grid-area: resume;
      }
      .about {
        grid-area: about;
      }
      .gravatar {
        grid-area: gravatar;
        border-radius: 12px;
        max-width: 67px;
        margin: 0;
        padding: 0;
      }
      .icon {
        grid-area: icon;
      }
      .github {
        margin: 0;
      }
      .twitter {
        margin: 1px 0 0 0;
      }
      .social {
        grid-area: social;
      }
      .far-right {
        grid-area: far-right;
      }
    `}
    </style>
    <header>
      <nav>
        <i className="icon fas fa-bars fa-lg" style={{color: 'white'}}></i>
        <i className="big-icon fas fa-bars fa-4x" style={{color: 'white'}}></i>
        <h3 className="name">
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
            {props.name}
          </Link>
        </h3>
        <div className="far-right">
          <div className="social">
            <a className="github" style={{textDecoration: 'none' }} href={props.githubUrl} >
              <i className="fab fa-github-square fa-2x" style={{color: 'white'}}></i>
            </a>
            <a className="twitter" style={{textDecoration: 'none' }} href={props.twitterUrl} >
              <i className="fab fa-twitter-square fa-2x" style={{color: 'white'}}></i>
            </a>
          </div>
          <img className="gravatar" src={props.gravatarUrl} />
        </div>
      </nav>
    </header>
  </div>
)

export default Header
