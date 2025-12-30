const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const task = require('../models/task');
const {
    createTask,
    getMyTasks,
    updateTask,
    deleteTask
} = require('../controllers/taskConteoller');

// @route   POST /api/task/create
// @desc    Create a new task
// @access  Private
router.post('/create', auth, createTask);

// @route   GET /api/tasks/get
// @desc    Get all tasks of logged in user
// @access  Private
router.get('/get', auth, getMyTasks);

// @route   PUT /api/tasks/update/:id
// @desc    Update a task (title, description, status, priority, dueDate)
// @access  Private
router.put('update/:id', auth, updateTask);

// @route   DELETE /api/tasks//:id
// @desc    Delete a task
// @access  Private
router.delete('delete/:id', auth, deleteTask);

module.exports = router;