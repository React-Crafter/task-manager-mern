const { text, json } = require('express');
const taslModel = require('../models/task');

// Create a new task
const createTask = async (req, res) => {
    try {
        const {title, description, status, paioraty, dueDate} = req.body;

        if (!title) {
            return res.status(400).json({message: 'Task title is required'});
        }

        // Create a new task
        const task = taslModel({
            title,
            description,
            status,
            paioraty,
            dueDate,
            user: req.user.id // From auth middleware
        });

        await task.save();

        return res.status(200).json(task);
    } catch (err) {
        console.error(err);
        return res.status(5000).json({ message: 'server site error' });
    }
}

// Get all tasks of logged in user
const getMyTasks = async (req, res) => {
    try {
        const tasks = await taslModel.find({ user: req.user.id }).sort({ createdAt: -1 });

        return res.status(200).json(tasks);
    } catch (err) {j
        console.error(err);
        return res.status(5000).json({ message: 'server site error' });
    }
}

// Update a task
const updateTask = async (req, res) => {
    try {
        const {title, description, status, paioraty, dueDate} = req.body;

        // Find the task
        const task = taslModel.findOne({ _id: req.params.id, user: req.user.id });

        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
        }

        // Update fields if provided
        if (title) task.title = title;
        if (description !== undefined) task.description = description;
        if (status) task.status = status;
        if (paioraty) task.paioraty = paioraty;
        if (dueDate !== undefined) task.dueDate = dueDate;

        await task.save();

        return res.status(200).json(task);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'server site error' });
    }
}

// Delete a task
const deleteTask = async (req, res) => {
    try {
        const task = await findOneAndDelete({ _id: req.params.id, user: req.user.id });

        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
        }

        return res.status(200),json(task);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Servet site error' });
    }
}

module.exports = { createTask, getMyTasks, updateTask, deleteTask };