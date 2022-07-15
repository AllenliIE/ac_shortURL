//Setting server
const express = require('express')
const app = express()
const port = 3000

//Setting index.js router
app.get('/', (req, res) => {
  res.send('hello world')
})

//Setting port 3000
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})