const express = require('express')
const router = express.Router()
//注意資料夾的層級('./' => '../../')
const URL = require('../../models/URL')
const shortenURL = require('../../application/shortenURL')

//Setting shortURL Change
router.post('/', (req, res) => {
  //當index的input不是url時，回到首頁 
  const shortURL = shortenURL()
  const originalURL = req.body.url
  if (!originalURL) return res.redirect('/')

  URL.findOne({ originalURL })
    //如果data正確，回傳data，否則URL新增短網址與原始網址
    .then(data => data ? data : URL.create({ shortURL, originalURL }))
    .then(data =>
      //回到index頁面顯示原 始網址與短網址
      res.render('index', {
        origin: req.headers.origin,
        shortURL: data.shortURL
      })
    )
    .catch(error => console.log(error))
})

//Setting shortURL link with originalURL
router.get('/:shortURL', (req, res) => {
  //用params取出短網址的新id
  const { shortURL } = req.params

  //從資料庫找出短網址的新id，如果找不到則顯示錯誤資訊
  URL.findOne({ shortURL })
    .then(data => {
      if (!data) {
        return res.render('error', {
          errorMsg: "Can't found the URL",
          errorURL: req.headers.host + "/" + shortURL,
        })
      }
      //找到資料的話，重新渲染原始的網址
      res.redirect(data.originalURL)
    })
    .catch(error => console.error(error))
})

module.exports = router