import React from 'react'
import ampConnect from 'ampersand-react-connector'
import BookItem from '../components/book-item'

const Books = React.createClass({
  propTypes: {
    books: React.PropTypes.object.isRequired
  },

  componentWillMount () {
    this.props.books.fetch()
  },

  render () {
    const {books} = this.props

    return (
      <div>
        <h2>Books</h2>
        <div>
          {books.map((book) => {
            return (<BookItem key={book.id} book={book}/>)
          })}
        </div>
      </div>
    )
  }
})

export default ampConnect(Books)
