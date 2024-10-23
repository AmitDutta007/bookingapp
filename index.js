import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('connected in DB');
        
    } catch (error) {
        throw error
    }
}


app.listen(3000, () => {
    connect()
    console.log("Connected to express !!!");
})

// app.get("/", () => {
//     res.send("Listing to")
// })