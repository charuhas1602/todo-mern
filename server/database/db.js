import mongoose from "mongoose";
import dotevn from 'dotenv'

dotevn.config()
const USERNAME = process.env.DB_USERNAME;
const USERPASSWORD = process.env.DB_PASSWORD;

const connection = () => {
    const MONGODB_URL = `mongodb+srv://${USERNAME}:${USERPASSWORD}@todomern.qrtdqhc.mongodb.net/?retryWrites=true&w=majority`

    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true
    })

    mongoose.connection.on('connected', () => {
        console.log("Database connected successfully 🎇")
    })
    mongoose.connection.on('disconnected', () => {
        console.log("Database not connected 🤢")
    })
    mongoose.connection.on('error', () => {
        console.log("Error while connecting with Database ⚠", console.error.message)
    })
}

export default connection;

/*
npm i nodemon express mongoose dotenv
*/