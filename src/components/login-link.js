import React, { PropTypes } from 'react'

export default React.createClass({
  displayName: 'LoginLink',

  propTypes: {
    name: PropTypes.string,
    avatarUrl: PropTypes.string
  },

  render () {
    const { name, avatarUrl } = this.props

    if (name) {
      return (
        <li className='pull-right'>
          <img src={avatarUrl} className='avatar avatar-small avatar-rounded'/>{name} <a href='/logout'>Logout</a>
        </li>
      )
    }

    return (
      <li className='pull-right'><a href='/login'>Login With Twitter</a></li>
    )
  }
})
