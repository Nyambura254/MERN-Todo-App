const express = require('express');
const mongoose = require('mongoose');


const app = express();
app.use(express.json());



const db = "mongodb://localhost:27017/myMERNtodo"
mongoose.connect(db, ({ useNewUrlParser: true }))
    .then(console.log("connected to mongodb"))
    .catch(err => console.log(err));

const todoSchema = new mongoose.Schema({
    title: String,
    complete: {
        type: Boolean,
        default: false
    }
})
const Todo = mongoose.model('todo', todoSchema)
app.get("/todos", (req, res) => {
    Todo.find().then(todo => res.json(todo))
})

app.listen(5000, () => {
    console.log("the server is running at port 5000")
});