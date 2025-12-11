# AVIO Backend API

A Node.js/Express REST API for managing users with MySQL database integration.

## 📋 Features

- ✅ RESTful API endpoints for user management
- ✅ MySQL database integration with connection pooling
- ✅ CORS enabled for frontend communication
- ✅ Input validation and error handling
- ✅ Environment configuration with .env
- ✅ Modular architecture (routes, models, config)
- ✅ Comprehensive API documentation
- ✅ Sample data included

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MySQL2** - MySQL database driver with promise support
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
backend/
├── config/
│   └── database.js          # MySQL connection pool configuration
├── models/
│   └── userModel.js         # User database operations
├── routes/
│   └── userRoutes.js        # User API routes and controllers
├── database/
│   └── init.sql             # Database schema and sample data
├── server.js                # Main Express application
├── package.json             # Dependencies and scripts
├── .env                     # Environment variables
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MySQL (v5.7 or higher)
- npm

### Installation

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env` file and update database credentials:
   ```
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=avio_db
   NODE_ENV=development
   ```

4. **Create database and tables:**
   - Open MySQL client
   - Run the SQL script:
   ```bash
   mysql -u root -p < database/init.sql
   ```

5. **Start the server:**
   ```bash
   npm run dev
   ```

6. **Verify the server:**
   - Health check: `http://localhost:5000/health`
   - API root: `http://localhost:5000/`

## 📚 API Endpoints

### Base URL
```
http://localhost:5000/api/users
```

### 1. Get All Users
```http
GET /api/users
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "firstName": "Emily",
      "lastName": "Johnson",
      "email": "emily.johnson@example.com",
      "phone": "+1-555-0101",
      "company": "Tech Corp",
      "role": "Software Engineer",
      "country": "United States"
    }
  ],
  "total": 20
}
```

### 2. Get User by ID
```http
GET /api/users/:id
```

**Example:** `GET /api/users/1`

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "firstName": "Emily",
    "lastName": "Johnson",
    "email": "emily.johnson@example.com",
    "phone": "+1-555-0101",
    "company": "Tech Corp",
    "role": "Software Engineer",
    "country": "United States"
  }
}
```

### 3. Create New User
```http
POST /api/users
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1-555-0001",
  "company": "New Company",
  "role": "Developer",
  "country": "United States"
}
```

**Response:** `201 Created`
```json
{
  "success": true,
  "data": {
    "id": 21,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phone": "+1-555-0001",
    "company": "New Company",
    "role": "Developer",
    "country": "United States"
  },
  "message": "User created successfully"
}
```

### 4. Update User
```http
PUT /api/users/:id
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Smith",
  "email": "john.smith@example.com",
  "phone": "+1-555-0002",
  "company": "Updated Company",
  "role": "Senior Developer",
  "country": "Canada"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "firstName": "John",
    "lastName": "Smith",
    "email": "john.smith@example.com",
    "phone": "+1-555-0002",
    "company": "Updated Company",
    "role": "Senior Developer",
    "country": "Canada"
  },
  "message": "User updated successfully"
}
```

### 5. Delete User
```http
DELETE /api/users/:id
```

**Example:** `DELETE /api/users/1`

**Response:**
```json
{
  "success": true,
  "message": "User deleted successfully"
}
```

## 🔧 Database Schema

### Users Table
```sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phone VARCHAR(20),
  company VARCHAR(100),
  role VARCHAR(100),
  country VARCHAR(100),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Columns
- **id** - Unique identifier (auto-increment)
- **firstName** - User's first name (required)
- **lastName** - User's last name (required)
- **email** - User's email address (required, unique)
- **phone** - User's phone number
- **company** - Company name
- **role** - Job title/role
- **country** - Country of residence
- **createdAt** - Record creation timestamp
- **updatedAt** - Last modification timestamp

## 🔐 Error Handling

### Common Error Responses

**400 Bad Request**
```json
{
  "success": false,
  "error": "Missing required fields: firstName, lastName, email"
}
```

**404 Not Found**
```json
{
  "success": false,
  "error": "User not found"
}
```

**500 Internal Server Error**
```json
{
  "success": false,
  "error": "Failed to fetch users",
  "details": "Error message here"
}
```

## 📦 Available Scripts

```bash
# Start the server
npm run dev

# Start production server
npm start
```

## 🧪 Testing with cURL

```bash
# Get all users
curl http://localhost:5000/api/users

# Get specific user
curl http://localhost:5000/api/users/1

# Create new user
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "jane@example.com",
    "company": "Tech Corp",
    "role": "Manager",
    "country": "USA"
  }'

# Update user
curl -X PUT http://localhost:5000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "jane.smith@example.com",
    "company": "New Corp",
    "role": "Senior Manager",
    "country": "Canada"
  }'

# Delete user
curl -X DELETE http://localhost:5000/api/users/1
```

## 🌐 CORS Configuration

The API accepts requests from any origin. To restrict CORS:

**In server.js:**
```javascript
app.use(cors({
  origin: 'http://localhost:5173', // Frontend URL
  credentials: true
}));
```

## 💾 Database Connection

### Connection Pooling
- **Pool Size:** 10 connections
- **Wait for Connections:** Yes
- **Queue Limit:** 0 (unlimited queue)

### Environment Variables
```
DB_HOST=localhost       # MySQL server host
DB_USER=root           # MySQL username
DB_PASSWORD=password   # MySQL password
DB_NAME=avio_db        # Database name
```

## 📝 Best Practices Implemented

✅ **Modular Architecture**
- Separated concerns (routes, models, config)
- Reusable database functions
- Clean code organization

✅ **Error Handling**
- Try-catch blocks for async operations
- Meaningful error messages
- Proper HTTP status codes

✅ **Security**
- Input validation
- SQL injection prevention (parameterized queries)
- CORS enabled
- Environment variable protection

✅ **Performance**
- Connection pooling for database
- Efficient queries
- Proper indexing (via init.sql)

## 🚀 Production Deployment

### Before Production
1. Update `.env` with production credentials
2. Set `NODE_ENV=production`
3. Use a reverse proxy (Nginx, Apache)
4. Enable HTTPS
5. Restrict CORS to specific origin
6. Set up proper logging
7. Configure database backups

### Example Production .env
```
PORT=3000
DB_HOST=prod-db.example.com
DB_USER=prod_user
DB_PASSWORD=secure_password_here
DB_NAME=avio_db
NODE_ENV=production
```

## 🔮 Future Enhancements

- [ ] Authentication (JWT)
- [ ] Role-based access control
- [ ] User pagination
- [ ] Advanced filtering
- [ ] Request logging
- [ ] Rate limiting
- [ ] Database migrations
- [ ] Unit tests
- [ ] API documentation (Swagger/OpenAPI)
- [ ] GraphQL endpoint

## 🐛 Troubleshooting

### MySQL Connection Error
- Verify MySQL is running
- Check database credentials in `.env`
- Ensure database exists: `CREATE DATABASE avio_db;`

### Port Already in Use
- Change PORT in `.env`
- Or kill process: `lsof -ti:5000 | xargs kill -9` (macOS/Linux)

### CORS Error
- Ensure backend is running on correct port
- Check CORS configuration in server.js
- Verify frontend URL in CORS settings

### Missing Dependencies
```bash
npm install
```

## 📧 Support

For issues or questions, check the console logs for detailed error messages.

---

**Happy API Development! 🎉**
