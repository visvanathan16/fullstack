const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../models/userModel');

/**
 * GET /api/users - Get all users
 */
router.get('/', async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json({
      success: true,
      data: users,
      total: users.length,
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch users',
      details: error.message,
    });
  }
});

/**
 * GET /api/users/:id - Get user by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
      });
    }
    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch user',
      details: error.message,
    });
  }
});

/**
 * POST /api/users - Create a new user
 */
router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, company, role, country } = req.body;

    // Validation
    if (!firstName || !lastName || !email) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: firstName, lastName, email',
      });
    }

    const user = await createUser({
      firstName,
      lastName,
      email,
      phone: phone || null,
      company: company || null,
      role: role || null,
      country: country || null,
    });

    res.status(201).json({
      success: true,
      data: user,
      message: 'User created successfully',
    });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create user',
      details: error.message,
    });
  }
});

/**
 * PUT /api/users/:id - Update user by ID
 */
router.put('/:id', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, company, role, country } = req.body;

    if (!firstName || !lastName || !email) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: firstName, lastName, email',
      });
    }

    const user = await updateUser(req.params.id, {
      firstName,
      lastName,
      email,
      phone: phone || null,
      company: company || null,
      role: role || null,
      country: country || null,
    });

    res.json({
      success: true,
      data: user,
      message: 'User updated successfully',
    });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update user',
      details: error.message,
    });
  }
});

/**
 * DELETE /api/users/:id - Delete user by ID
 */
router.delete('/:id', async (req, res) => {
  try {
    const success = await deleteUser(req.params.id);

    if (!success) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
      });
    }

    res.json({
      success: true,
      message: 'User deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete user',
      details: error.message,
    });
  }
});

module.exports = router;
