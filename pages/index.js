import Page from '../components/page';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import { red, blueGrey, darkText } from '../style/mdcolors';

const Home = (props) => {
  return (
    <div>
      <Page>
        <div className="logo  w3-bar w3-theme w3-large w3-card-4">
          <Link href="/">
            <a>
              <img  className="w3-bar-item w3-circle w3-mobile w3-image" src="https://avatars2.githubusercontent.com/u/11185240?v=4" />
            </a>
          </Link>
          <Link href="/">
            <a className="w3-bar-item w3-button w3-mobile w3-hover-none w3-text-light-grey w3-hover-text-blue">Benjamin H Boruff</a>
          </Link>
          <Link href="/resume">
            <a className="w3-bar-item w3-button w3-mobile w3-hover-none w3-text-light-grey w3-hover-text-white">Resum&#233;</a>
          </Link>
          <Link href="/about">
            <a className="w3-bar-item w3-button w3-mobile w3-hover-none w3-text-light-grey w3-hover-text-white">About</a>
          </Link>
          <Link href="/contact">
            <a className="w3-bar-item w3-button w3-mobile w3-hover-none w3-text-light-grey w3-hover-text-white">Contact</a>
          </Link>
          <Link href="/">
            <a className="w3-bar-item w3-button w3-mobile w3-right">
              <i className="fa fa-bars"></i>
            </a>
          </Link>
        </div>
        <div className="jumbo w3-container w3-card-4 w3-round w3-light-grey">
          <button className="btn btn-danger">Danger!</button>
          <h3>My site reboot!</h3>
          <p>Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
            vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
            amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
            placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
            pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae,
            ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
            condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac
            dui. Donec non enim in turpis pulvinar facilisis. Ut felis.
            Praesent dapibus, neque id cursus faucibus, tortor neque egestas
            augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam
            dui mi, tincidunt quis, accumsan porttitor, facilisis luctus,
            metus</p>
        </div>
      </Page>
      <style jsx>{`
        // .main {
        //   position: fixed;
        //   width: 100%;
        //   left: 0;
        //   top: 0;
        // }

        // .logo {
        //   padding: 10px;
        // }

        .logo img {
          max-width: 60px;
        }

        .jumbo {
          margin: 10% 20% 10%;
          padding: 10px;
        }
      `}</style>
    </div>
  );
}

// Home.getInitialProps = () => {
//   let avatar = null;
//
//   console.log("Hello!!!!!");
//   fetch('https://api.github.com/users/benjaminboruff')
//     .then( response => {
//         if(response.status >= 400) {
//           console.log(response.json());
//           throw new Error("Bad response from server");
//         }
//         return response.json();
//       })
//       .then( user => {
//         console.log(user.avatar_url);
//          avatar = user.avatar_url;
//       })
//       .catch( err => console.log(err.message) );
//
//     return { avatar };
//
// }

export default Home;
