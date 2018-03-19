import React, { Component } from 'react'
import styles from './styles'
import Link from 'gatsby-link'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {burger: null}
    this.toggleBurger = this.toggleBurger.bind(this)
  }

  toggleBurger() {
    console.log("wow")
    this.setState({burger: this.state.burger ? null : 90})
  }

  render(){
    return (
      <div className="root">
        <style jsx>{styles}</style>
        <header >
          <nav>
            <div className="icon" onClick={this.toggleBurger}>
              <FontAwesomeIcon icon="bars" size="2x" rotation={this.state.burger} style={{color: 'white'}} />
            </div>
            <div className="big-icon" onClick={this.toggleBurger}>
              <FontAwesomeIcon icon="bars" size="4x" rotation={this.state.burger} style={{color: 'white'}} />
            </div>
            <h3 className="name">
              <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
                {this.props.name}
              </Link>
            </h3>
            <div className="far-right">
              <div className="social">
                <a className="github" style={{textDecoration: 'none' }} href={this.props.githubUrl} >
                  <FontAwesomeIcon icon={["fab", "github-square"]} size="2x" style={{color: 'white'}} />
                </a>
                <a className="twitter" style={{textDecoration: 'none' }} href={this.props.twitterUrl} >
                  <FontAwesomeIcon icon={["fab", "twitter-square"]} size="2x" style={{color: 'white'}} />
                </a>
              </div>
              <img className="gravatar" src={this.props.gravatarUrl} />
            </div>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header
