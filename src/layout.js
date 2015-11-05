import React, { PropTypes } from 'react'
import app from 'ampersand-app'
import InternalNav from 'react-internal-nav'
import LoginLink from './components/login-link'
import ampConnect from 'ampersand-react-connector'

const Layout = React.createClass({
  displayName: 'Layout',

  propTypes: {
    me: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired
  },

  onNav (pathname) {
    app.router.history.navigate(pathname, {trigger: true})
  },

  render () {
    const { me } = this.props

    return (
      <InternalNav onInternalNav={this.onNav}>
        <nav className='top-nav top-nav-light cf' role='navigation'>
          <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
          <label htmlFor='menu-toggle'>Menu</label>
          <ul className='list-unstyled list-inline cf'>
            <li>LibraryData</li>
            <li><a href='/'>books</a></li>
            <LoginLink name={me.twitterUsername} avatarUrl={me.twitterImage}/>
          </ul>
        </nav>
        <div className='container'>
          {this.props.children}
        </div>
      </InternalNav>
    )
  }
})

export default ampConnect(Layout)
