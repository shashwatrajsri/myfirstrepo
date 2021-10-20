const express = require('express')
const app = express()
const PORT = 3000;

app.use(express.json())

const token = "TOP_SECRET"
let products = [{ name : 'iPhone12 Case', price: '999' }, {name : 'iPhone13 Case', price : '1199' }, {name : 'iPhome13 Pro Case', price : '1499' }]

//Middlewares

const validator = (req,res,next) => {
    const{name,price} = req.body

    if(!name || !price) res.json({ error: "Validation failed" })
    else next()
}

const isAuthorised = (req, res, next) => {
    if (req.headers.authorisation === token) next()
    else res.json({ error: "UNAUTHORISED"})
}

//--------PUBLIC routes--------
//GET ROUTE
// Send all products
app.get('/products', (req,res) => {
    res.json({ products })
})

//--------PRIVATE routes--------

app.post('/products/add', isAuthorised, validator, (req,res) => {
    const{name,price} = req.body

        products.push({
            name,
            price,
        })
    res.send({ products })
})

//--------Authentication----------

app.post('/auth', (req,res) => {
    const {email,password} = req.body
    if (email === 'ss4521811@gmail.com' && password === 'password') {
        res.send({ token})
    } else {
        res.send({ message: "UNAUTHORISED" })
    }
})

app.listen(PORT, () => {
    console.log(`Server running at port ${3000}`)
})