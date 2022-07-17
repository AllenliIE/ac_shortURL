//Setting server
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const { Error } = require('mongoose')
const URL = require('./models/URL')



//Setting Mongoose
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

//Connection mongoose
const db = mongoose.connection
//db.on error
db.on('error', () => {
  console.log('mongodb error!')
})
//db.once connected
db.once('open', () => {
  console.log('mongodb connected!')
})

//Use handlebars to template engine setting
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))  //input exphbs and parameters
app.set('view engine', 'hbs')  //open handlebars


//Setting index.js router
app.get('/', (req, res) => {
  res.render('index')
})

//Setting shortURL Change
app.post('/', (req, res) => {
  //當index的input不是url時，回到首頁
  if (!req.body.url) return res.redirect('/')
  const originalURL = req.body.url

  URL.findOne({ originalURL })
    //如果data正確，回傳data，否則URL新增短網址與原始網址
    .then(data => data ? data : URL.create({ shortURL, originalURL }))
    .then(data =>
      //回到index頁面顯示原始網址與短網址
      res.render('index', {
        origin: req.headers.origin,
        shortURL: data.shortURL
      })
    )
    .catch(error => console.log(error))
})

//Setting port 3000
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})