import Collection from 'ampersand-rest-collection'
import BookModel from './book'

export default Collection.extend({
  url: 'https://library-data.herokuapp.com/books',
  model: BookModel,
  parse (resp) {
    return resp.data
  }
})
