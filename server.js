const express = require('express')
const bodyParser = require('body-parser')

const router = require('./routes/index')

const app = express()

const PORT = 4000


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use('/assets', express.static(__dirname + '/public/assets'))

app.use('/', router)

app.listen(PORT, err => {
    if(err) {
        console.log(err)
    }
    else {
        console.log(`Listening to PORT ${PORT}`)
    }
})