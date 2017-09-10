import Head from 'next/head';
import Link from 'next/link';
import { Container } from 'reactstrap'

const Layout = (props) => (
  <div>
    <Head>
      <title>BHB</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" />
    </Head>
    <Container>
      {props.children}
    </Container>
  </div>
)

export default Layout
