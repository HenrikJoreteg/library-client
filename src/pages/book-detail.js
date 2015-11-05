import React from 'react'
import ampConnect from 'ampersand-react-connector'

const BookDetail = React.createClass({
  propTypes: {
    book: React.PropTypes.object.isRequired,
    me: React.PropTypes.object.isRequired
  },

  onCheckoutClick (e) {
    e.preventDefault()
    this.props.book.checkout()
  },

  onReturnClick (e) {
    e.preventDefault()
    this.props.book.returnBook()
  },

  render () {
    const { book, me } = this.props

    let checkoutButtons

    if (me.loggedIn) {
      checkoutButtons = (
        <p>
          <button onClick={this.onCheckoutClick} className='button' disabled={book.checkedOutBy}>
            <span className='octicon octicon-repo'></span> Checkout Book
          </button>&nbsp;
          <button onClick={this.onReturnClick} className='button' disabled={!book.checkedOutByMe}>
            <span className='octicon octicon-repo-push'></span> Return Book
          </button>
        </p>
      )
    }

    return (
      <div className='book-detail'>
        <h3>{book.title}</h3>
        {checkoutButtons}
        <img src={book.imageUrl} height='200'/>
        <p>{book.description}</p>
      </div>
    )
  }
})

export default ampConnect(BookDetail)
