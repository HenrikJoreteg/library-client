import React from 'react'
import ampConnect from 'ampersand-react-connector'

const BookItem = React.createClass({
  propTypes: {
    book: React.PropTypes.object.isRequired
  },

  render () {
    const { book } = this.props

    let checkedOut

    if (book.checkedOutByMe) {
      checkedOut = (
        <span> (you have this)</span>
      )
    } else if (book.checkedOutBy) {
      checkedOut = (
        <span> (checked out)</span>
      )
    }

    return (
      <div>
        <span className='octicon octicon-repo'></span> <a href={book.appUrl}>{book.title}</a> {checkedOut}
      </div>
    )
  }
})

export default ampConnect(BookItem)
