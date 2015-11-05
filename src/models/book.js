import Model from 'ampersand-model'
import app from 'ampersand-app'
import xhr from 'xhr'

export default Model.extend({
  url () {
    return `https://library-data.herokuapp.com/books/${this.id}`
  },

  props: {
    id: 'number',
    title: 'string',
    description: 'string',
    imageUrl: 'string',
    checkedOutBy: 'string',
    checkedOutById: 'string',
    checkedOutDue: 'date',
    checkedOutCount: 'number'
  },

  derived: {
    appUrl: {
      deps: ['id'],
      fn () {
        return `/books/${this.id}`
      }
    },

    checkedOutByMe: {
      cache: false,
      fn () {
        return app.me.twitterId === this.checkedOutById
      }
    }
  },

  checkout () {
    xhr({
      method: 'post',
      url: `https://library-data.herokuapp.com/books/${this.id}/checkout`,
      json: true,
      withCredentials: true
    }, (err, response, body) => {
      if (err) {
        throw err
      } else {
        this.set(body)
      }
    })
  },

  returnBook () {
    xhr({
      method: 'delete',
      url: `https://library-data.herokuapp.com/books/${this.id}/checkout`,
      json: true,
      withCredentials: true
    }, (err, response, body) => {
      if (err) {
        throw err
      } else {
        this.set(body)
      }
    })
  }
})
