import Head from 'next/head';
import { red, blueGrey } from '../style/mdcolors';

const Page = ( props ) => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <title>BHB</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-red.css" />
    </Head>
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
