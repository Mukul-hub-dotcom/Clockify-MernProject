require('dotenv').config()
const cors=require('cors')
const passport=require('passport')
const passportSetup=require("./passport")
const cookieSession=require('cookie-session')
const express = require('express')

const app = express()

app.use(
    cookieSession({
        name:"session",
        keys:["cyberwolve"],
        maxAge:24*60*60*100,
    })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(
    cors({
        origin:"http://localhost:3000/",
        methods:"GET,POST,PUT,DELETE",
        credentials:true,
    })
)

const port=process.env.PORT||8080

app.listen(port, () => {
    console.log(`Server is Listening on port ${port}`)
})