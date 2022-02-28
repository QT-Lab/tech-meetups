const express = require('express')

const menu = {
  bbq: {
    "pork": 1,
    "chicken": 2324,
    "beef": 3
  },
  drinks: {
    "tan": 11,
    "cola": 22
  }
}

const Artaki_mot = express()

Artaki_mot.get('/bbq', (req, res) => {
  console.log(menu["bbq"][req.query.type])
  res.json(menu["bbq"][req.query.type])
})

Artaki_mot.get('/drinks', (req, res) => {
  res.json(menu["drinks"][req.query.type])
})

Artaki_mot.listen(8088)
