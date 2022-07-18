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
module.exports = db