const express = require('express')
const morgan = require('morgan') //logs information about each incoming request
const app = express()

app.use(express.static('public./stylesheets')) //Serves up static files from some kind of public folder.
app.use(morgan('dev')); // static middleware
app.use(express.urlencoded({ extended: false })); //body parsing middleware

app.get('/',(req,res,next)=>{
    res.send(`<body><h1> hello world</h1></body>`)
})

const PORT = 3000

app.listen(PORT,()=>{
    console.log(`App listening in ${PORT}`)
})

