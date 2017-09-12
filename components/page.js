import Head from 'next/head';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import * as FontAwesome from 'react-icons/lib/fa'
import { red, blueGrey } from '../style/mdcolors';

const brandImgStyle = { maxWidth: "60px" };

const Page = ( props ) => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <title>BHB</title>
      <link rel="icon" type="image/png" href="now-white.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-red.css" />
    </Head>
    <div className="w3-bar w3-theme w3-large w3-card-4 w3-container">
      <Link href="/">
        <a>
          <img  style={brandImgStyle} className="w3-bar-item w3-circle w3-mobile w3-image brand-img" src="https://avatars2.githubusercontent.com/u/11185240?v=4" />
        </a>
      </Link>
      <Link href="/">
        <a className="w3-bar-item w3-button w3-mobile w3-hover-none w3-text-light-grey w3-hover-text-blue">Benjamin H Boruff</a>
      </Link>
      <Link href="/resume" >
        <a className="w3-bar-item w3-button w3-mobile w3-hover-none w3-text-light-grey w3-hover-text-white">Resum&#233;</a>
      </Link>
      <Link href="/about" >
        <a className="w3-bar-item w3-button w3-mobile w3-hover-none w3-text-light-grey w3-hover-text-white">About</a>
      </Link>
      <Link href="/contact" >
        <a className="w3-bar-item w3-button w3-mobile w3-hover-none w3-text-light-grey w3-hover-text-white">Contact</a>
      </Link>
      <Link href="/">
        <a className="w3-bar-item w3-button w3-mobile w3-right">
          <FontAwesome.FaBars />
        </a>
      </Link>
    </div>
    { props.children }
    <style jsx global >{`
      html * {
        font-family: Arial, sans-serif !important;
      }

      // body {
      //   background-color: ${blueGrey["50"]};
      // }

      a {
        text-decoration: none;
      }

      .btn {
        border-radius: 5px;
      }

      .btn-danger {
        background-color: ${red["400"]};
      }
    `}</style>

  </div>
);

export default Page;
