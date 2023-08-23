import { configDotenv } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";



const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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


app.use("/api/user", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/auth", authRoute);


app.listen(8800, () => {
    connect();
    console.log("backend server is running")
})