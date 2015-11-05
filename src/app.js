import app from 'ampersand-app'
import Router from './router'
import Me from './models/me'

// our styles
import './styles/main.styl'
import 'octicons/octicons/octicons.css'

window.app = app

app.extend({
  init () {
    this.me = new Me()
    this.router = new Router()
    this.router.history.start()
  }
})

app.init()
