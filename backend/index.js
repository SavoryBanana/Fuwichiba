// initialize dependencies needed for the backend

const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Initialize database connection to MongoDB
mongoose.connect("mongodb+srv://patrickdonghil:admintest@cluster0.ymjfmms.mongodb.net/fuwichiba");

// API Creation
app.get("/", (req, res) => {
    res.send("Express App is running.")
})

app.listen(port, (error) => {
    if (!error) {
        console.log(`Server running on port ${port}`)
    } else {
        console.log(error)
    }
})