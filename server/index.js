// const express = require(express);
//Or you can import
import express from 'express';
import connection from './database/db.js';

const app = express()
const PORT = 8000
connection();
app.listen(PORT, () => {
    console.log("Your server is running on PORT 8000")
})

