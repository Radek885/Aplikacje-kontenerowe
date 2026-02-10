const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Ważne: pozwala frontendowi na zapytania
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL || 'mongodb://db:27017/todolist');

const Task = mongoose.model('Task', { name: String, completed: { type: Boolean, default: false } });

app.get('/tasks', async (req, res) => res.json(await Task.find()));
app.post('/tasks', async (req, res) => res.json(await new Task(req.body).save()));
app.patch('/tasks/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    task.completed = !task.completed;
    await task.save();
    res.json(task);
});
app.delete('/tasks/:id', async (req, res) => res.json(await Task.findByIdAndDelete(req.params.id)));

app.listen(3000, () => console.log('Backend na porcie 3000'));