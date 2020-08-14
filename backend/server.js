const express = require('express');
const mongoose = require('mongoose');


const app = express();
app.use(express.json());




const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://bonnie:<password>@cluster0.ulgml.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

mongoose.connect(db, ({ useUnifiedTopology: true }))
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

app.post('/todos', (req, res) => {
    const newTodo = new Todo({
        title: req.body.title
    })
    newTodo.save().then(todo => res.json(todo))
})
app.delete('/todos:id', (req, res) => {
    Todo.findByIdAndDelete(re.params.id)
        .then(() => res.json({ remove: true }))
})

app.listen(5000, () => {
    console.log("the server is running at port 5000")
});