import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBox from './components/SearchBox'
import Button from './components/Button'
import Alert from './components/Alert'
import UserTable from './components/UserTable'
import LoadingSpinner from './components/LoadingSpinner'
import { showToast } from './utils/toast'
import './App.css'

/**
 * Main App Component
 * Manages user data fetching, filtering, adding, and deletion
 */
function App() {
  const [users, setUsers] = useState([])
  const [apiUsers, setApiUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  /**
   * Fetches users from the DummyJSON API
   */
  const fetchUsers = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await axios.get('https://dummyjson.com/users')
      setApiUsers(response.data.users)
      setUsers(response.data.users)
      setLoading(false)
      showToast('Users loaded', 'User list refreshed successfully', 'success')
    } catch (err) {
      setError(err.message)
      setLoading(false)
      showToast('Error', 'Failed to fetch users', 'error')
    }
  }

  /**
   * Initialize component by fetching users on mount
   */
  useEffect(() => {
    fetchUsers()
  }, [])

  /**
   * Filters users based on search query across multiple fields
   * @param {string} value - The search query string
   */
  const handleSearch = (value) => {
    setSearchQuery(value)
    const filtered = apiUsers.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase()
      const company = user.company?.name?.toLowerCase() || ''
      const role = user.company?.title?.toLowerCase() || ''
      const country = user.address?.country?.toLowerCase() || ''
      const query = value.toLowerCase()

      return (
        fullName.includes(query) ||
        company.includes(query) ||
        role.includes(query) ||
        country.includes(query)
      )
    })
    setUsers(filtered)
  }

  /**
   * Adds a new static user to the local array
   */
  const handleAddUser = () => {
    const newUser = {
      id: Math.max(...apiUsers.map(u => u.id), 0) + 1,
      firstName: 'New',
      lastName: 'User',
      company: { name: 'Sample Company', title: 'Sample Role' },
      address: { country: 'USA' },
    }
    const updatedApiUsers = [...apiUsers, newUser]
    setApiUsers(updatedApiUsers)
    setUsers(updatedApiUsers)
    showToast('User added', 'New user added to the list', 'success')
  }

  /**
   * Deletes a user from both display and API arrays
   * @param {number} userId - The ID of the user to delete
   */
  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId)
    const updatedApiUsers = apiUsers.filter((user) => user.id !== userId)
    setUsers(updatedUsers)
    setApiUsers(updatedApiUsers)
    showToast('User deleted', 'User removed from the list', 'info')
  }

  return (
    <div className="app-container">
      {/* Header */}
      <div className="app-header">
        <h1>User Management</h1>
      </div>

      {/* Error Alert */}
      {error && <Alert status="error" message={error} />}

      {/* Controls Section */}
      <div className="controls-section">
        <SearchBox
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by name, company, role, or country..."
        />
        <Button onClick={fetchUsers} variant="primary">
          ⟳ Refresh
        </Button>
        <Button onClick={handleAddUser} variant="success">
          + Add User
        </Button>
      </div>

      {/* Loading State */}
      {loading && <LoadingSpinner />}

      {/* Empty State */}
      {!loading && users.length === 0 && (
        <Alert status="info" message="No users found" />
      )}

      {/* User Table */}
      {!loading && users.length > 0 && (
        <UserTable users={users} onDelete={handleDeleteUser} />
      )}

      {/* User Counter */}
      <div className="user-counter">
        Showing {users.length} of {apiUsers.length} users
      </div>
    </div>
  )
}

export default App
