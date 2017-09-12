import Page from '../components/page';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import * as FontAwesome from 'react-icons/lib/fa'
import { red, blueGrey, darkText } from '../style/mdcolors';

const Home = (props) => {
  return (
    <div>
      <Page>
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
        .jumbo {
          margin: 10% 20% 10%;
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
