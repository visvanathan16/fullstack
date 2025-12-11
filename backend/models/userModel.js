const pool = require('../config/database');

/**
 * Get all users from database
 * @returns {Array} Array of user objects
 */
const getAllUsers = async () => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query('SELECT * FROM users');
    return rows;
  } finally {
    connection.release();
  }
};

/**
 * Get user by ID
 * @param {number} id - User ID
 * @returns {Object} User object
 */
const getUserById = async (id) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  } finally {
    connection.release();
  }
};

/**
 * Create a new user
 * @param {Object} userData - User data object
 * @returns {Object} Created user with ID
 */
const createUser = async (userData) => {
  const connection = await pool.getConnection();
  try {
    const [result] = await connection.query(
      'INSERT INTO users (firstName, lastName, email, phone, company, role, country) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [
        userData.firstName,
        userData.lastName,
        userData.email,
        userData.phone,
        userData.company,
        userData.role,
        userData.country,
      ]
    );
    return { id: result.insertId, ...userData };
  } finally {
    connection.release();
  }
};

/**
 * Update user by ID
 * @param {number} id - User ID
 * @param {Object} userData - Updated user data
 * @returns {Object} Updated user
 */
const updateUser = async (id, userData) => {
  const connection = await pool.getConnection();
  try {
    await connection.query(
      'UPDATE users SET firstName = ?, lastName = ?, email = ?, phone = ?, company = ?, role = ?, country = ? WHERE id = ?',
      [
        userData.firstName,
        userData.lastName,
        userData.email,
        userData.phone,
        userData.company,
        userData.role,
        userData.country,
        id,
      ]
    );
    return { id, ...userData };
  } finally {
    connection.release();
  }
};

/**
 * Delete user by ID
 * @param {number} id - User ID
 * @returns {boolean} Success status
 */
const deleteUser = async (id) => {
  const connection = await pool.getConnection();
  try {
    const [result] = await connection.query('DELETE FROM users WHERE id = ?', [id]);
    return result.affectedRows > 0;
  } finally {
    connection.release();
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
