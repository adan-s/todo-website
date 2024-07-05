const express = require('express')
const path = require('path')
const router = express.Router()
const { getTasks } = require('../controllers/todoController')

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'../templates/index.html'))
})


router.get('/todo', (req, res) => {
  res.sendFile(path.join(__dirname,'../templates/todoPage.html'))
})


router.get('/tasks',getTasks )


module.exports=router;