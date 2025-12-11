import React from 'react'

const UserTable = ({ users, onDelete }) => {
  if (users.length === 0) {
    return null
  }

  return (
    <div className="table-wrapper">
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Role</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={user.id} className={idx % 2 === 0 ? 'row-even' : 'row-odd'}>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>{user.company?.name || 'N/A'}</td>
              <td>{user.company?.title || 'N/A'}</td>
              <td>{user.address?.country || 'N/A'}</td>
              <td>
                <button
                  className="btn btn-delete btn-sm"
                  onClick={() => onDelete(user.id)}
                >
                  🗑 Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
