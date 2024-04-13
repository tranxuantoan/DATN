import express from 'express'
require('dotenv').config()
import cors from 'cors'
import initRoutes from './src/routes'
import connectDatabase from './src/config/connectDatabase'
import { getNumberFromString } from './src/ultis/common'
import generateCode from './src/ultis/generateCode'
import generateDate from './src/ultis/generateDate'


const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", 'GET', 'PUT', 'DELETE']
}))
app.use(express.json({limit: '10mb'}))
app.use(express.urlencoded({extended: true,limit: '10mb'}))

initRoutes(app) 
connectDatabase()

const port = process.env.PORT || 8888
const listener = app.listen(port, () => {
    console.log(`Server is running on the port ${listener.address().port}`);
})