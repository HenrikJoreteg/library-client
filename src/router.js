import app from 'ampersand-app'
import React from 'react'
import { render } from 'react-dom'
import qs from 'query-string'
import Router from 'ampersand-router'
import Layout from './layout'
import BooksPage from './pages/books'
import BookDetailPage from './pages/book-detail'
import MessagePage from './pages/message'

export default Router.extend({
  renderPage (page) {
    page = (
      <Layout me={app.me}>
        {page}
      </Layout>
    )

    render(page, document.body.firstChild)
  },

  routes: {
    '': 'books',
    'login': 'login',
    'logout': 'logout',
    'books/:id': 'bookDetail',
    '*404': 'fourOhFour'
  },

  books () {
    this.renderPage(<BooksPage books={app.me.books}/>)
  },

  bookDetail (id) {
    app.me.books.getOrFetch(parseInt(id, 10), (err, book) => {
      if (err) {
        this.fourOhFour()
      } else {
        this.renderPage(<BookDetailPage book={book} me={app.me}/>)
      }
    })
  },

  login () {
    window.location = 'https://library-data.herokuapp.com/login?' + qs.stringify({
      redirectUri: window.location.origin
    })
  },

  logout () {
    window.location = 'https://library-data.herokuapp.com/logout?' + qs.stringify({
      redirectUri: window.location.origin
    })
  },

  fourOhFour () {
    this.renderPage(<MessagePage title='404' message='Nothing to see here, sorry.'/>)
  }
})
