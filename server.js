const express = require('express')

const userRouter = require('./routers/user-router')
const authRouter = require('./routers/auth-router')

const server = express()
const session = require('express-session')

const sessionConfig = {
    name: 'change your default session name!',
    secret: 'Keep it secret, keep it safe',
    cookie: {
        maxAge: 1000 * 60 * 30,
        secure: process.env.SECURE_COOKIE || false,  
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,
}

server.use(express.json())
server.use(session(sessionConfig))

server.get('/', (req, res) => {
    res.status(200).send("server running")
})

server.use('/api/user', userRouter)
server.use('/api/auth', authRouter)

module.exports = server;