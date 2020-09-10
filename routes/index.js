const express = require('express')
const Joi = require('joi')

const route = express.Router()

route.get('/', (req, res) => {
    res.render('index')
})

route.post('/post', (req, res) => {
    // console.log(req.body)
    // res.json({success: true})

    const schema = Joi.object().keys({
        name: Joi.string().min(4).required(),
        email: Joi.string().email().required()
    })

    Joi.validate(req.body, schema, (err, result) => {
        if (err) {
            console.log(err)
            res.send('An error occurred!')
        }
        else {
            console.log(result)
            res.send('Successfully done!')
        }
    })
})

module.exports = route