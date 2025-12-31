const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); // JWT verify
const {
  createTask,
  getMyTasks,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

// @route   POST /api/tasks
// @desc    Create a new task
// @access  Private
router.post('/', auth, createTask);

// @route   GET /api/tasks
// @desc    Get all tasks of logged in user
// @access  Private
router.get('/', auth, getMyTasks);

// @route   PUT /api/tasks/:id
// @desc    Update a task (title, description, status, priority, dueDate)
// @access  Private
router.put('/:id', auth, updateTask);

// @route   DELETE /api/tasks/:id
// @desc    Delete a task
// @access  Private
router.delete('/:id', auth, deleteTask);

module.exports = router;