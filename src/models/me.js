import Model from 'ampersand-model'
import BookCollection from './book-collection'
import ajaxMixin from '../mixins/ajax-config'

export default Model.extend(ajaxMixin, {
  initialize () {
    this.fetch()
  },
  url: 'https://library-data.herokuapp.com/me',
  props: {
    twitterId: 'string',
    twitterUsername: 'string',
    twitterImage: 'string'
  },
  derived: {
    loggedIn: {
      deps: ['twitterId'],
      fn () {
        return !!this.twitterId
      }
    }
  },
  collections: {
    books: BookCollection
  }
})
