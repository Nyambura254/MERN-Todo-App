const express = require('express');
const mongoose = require('mongoose');


const app = express();
app.use(express.json());



const db = "mongodb://localhost/myMERNtodo"
mongoose.connect(db, ({ useNewUrlParser: true }))

app.listen(5000, () => {
    console.log("the server is running at port 5000")
});