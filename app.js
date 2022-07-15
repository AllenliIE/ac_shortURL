//Setting server
const express = require('express')
const app = express()
const port = 3000

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


//Setting index.js router
app.get('/', (req, res) => {
  res.send('hello world')
})

//Setting port 3000
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})