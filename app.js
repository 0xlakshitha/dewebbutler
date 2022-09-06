import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import hashRoute from './routes/hashstoreRoute.js'

dotenv.config()

const app = express()

app.use(cors())
app.options('*', cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/hash', hashRoute)

app.get('/hash', async (req, res) => {
    try {
        const hashs = await HashStore.find({verified: false})

        res.status(200).json(hashs)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(3000, console.log(`Database connection ready and server running on port ${port}`))
    })
    .catch((err) => {
        console.log(err.message)
    })
