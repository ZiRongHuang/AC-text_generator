const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateText = require('./generate_text')
const roleData = require('./public/apis/roleData.json')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  roleData.forEach(el => (el.active = false))
  res.render('index', { roleData })
})

app.post('/', (req, res) => {
  const { role } = req.body
  const text = generateText(role)

  roleData.forEach(el => {
    if (el.title === role) el.active = true
    else el.active = false
  })

  res.render('index', { roleData, text })
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
