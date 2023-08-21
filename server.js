import { configDotenv } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'

const app = express()

mongoose.set('strictQuery', true)
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('connection is successfull')
    } catch (error) {
        console.log(error);
    }
}


app.listen(8800, () => {
    console.log("backend server is running")
})