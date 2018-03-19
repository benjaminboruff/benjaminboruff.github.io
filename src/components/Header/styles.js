import css from 'styled-jsx/css'

export default css`
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
        .gravatar {
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
            margin-top: 10px;
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
`