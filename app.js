//Setting server
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const routes = require('./routes')
require('./config/mongoose')

//Use handlebars to template engine setting
app.use(bodyParser.urlencoded({ extended: true }))
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))  //input exphbs and parameters
app.set('view engine', 'hbs')  //open handlebars

//Use express routes
app.use(routes)

//Setting port 3000
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})