# AVIO Project - Complete Setup Guide

This guide covers the complete setup for the AVIO User Management application with React frontend and Node.js/MySQL backend.

## 📊 Project Architecture

```
AVIO (Root)
├── client-app/          # React Frontend (Port 5173)
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── utils/       # Utility functions
│   │   └── App.jsx      # Main application
│   └── package.json
│
└── backend/             # Node.js API (Port 5000)
    ├── config/          # Database configuration
    ├── models/          # Database models
    ├── routes/          # API routes
    ├── server.js        # Express server
    └── package.json
```

## 🚀 Quick Start

### Phase 1: Backend Setup (5 minutes)

#### 1.1 Install MySQL
- Download from [mysql.com](https://www.mysql.com/downloads/)
- Or use package manager:
  ```bash
  # macOS
  brew install mysql
  
  # Windows (using Chocolatey)
  choco install mysql
  
  # Linux (Ubuntu)
  sudo apt-get install mysql-server
  ```

#### 1.2 Start MySQL Service
```bash
# macOS
brew services start mysql

# Windows
net start MySQL80

# Linux
sudo systemctl start mysql
```

#### 1.3 Setup Backend Database
```bash
# Connect to MySQL
mysql -u root -p

# Run setup commands
CREATE DATABASE avio_db;
USE avio_db;
```

Then import the schema:
```bash
mysql -u root -p avio_db < backend/database/init.sql
```

#### 1.4 Configure Backend
```bash
cd backend

# Install dependencies
npm install

# Create/update .env file
# PORT=5000
# DB_HOST=localhost
# DB_USER=root
# DB_PASSWORD=your_password
# DB_NAME=avio_db
# NODE_ENV=development

# Start the server
npm run dev
```

**Expected Output:**
```
✓ Server running at http://localhost:5000
✓ API available at http://localhost:5000/api/users
✓ Health check at http://localhost:5000/health
```

### Phase 2: Frontend Setup (5 minutes)

```bash
cd client-app

# Install dependencies
npm install

# Start development server
npm run dev
```

**Expected Output:**
```
✓ Local: http://localhost:5173/
```

### Phase 3: Connect Frontend to Backend (Optional)

By default, the frontend uses `https://dummyjson.com/users`. To use your local API:

**In `client-app/src/App.jsx`**, update the API endpoint:

```javascript
// Change this line:
const response = await axios.get('https://dummyjson.com/users')

// To this:
const response = await axios.get('http://localhost:5000/api/users')
```

## 📋 Verification Checklist

### Backend
- [ ] MySQL is running
- [ ] Database `avio_db` created
- [ ] `backend/server.js` running on port 5000
- [ ] `http://localhost:5000/health` returns success

### Frontend
- [ ] `client-app/` running on port 5173
- [ ] Users display in the table
- [ ] Search functionality works
- [ ] Add/Delete buttons work

### Integration
- [ ] Frontend loads user data
- [ ] No CORS errors in console
- [ ] All CRUD operations work

## 🧪 Test the API

### Using cURL

```bash
# Health check
curl http://localhost:5000/health

# Get all users
curl http://localhost:5000/api/users

# Get specific user
curl http://localhost:5000/api/users/1

# Create user
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "company": "Test Co",
    "role": "Tester",
    "country": "USA"
  }'
```

### Using Postman

1. **Import Collection**
   - Create new collection "AVIO API"
   - Add requests for each endpoint

2. **Example Requests**
   - GET: `http://localhost:5000/api/users`
   - POST: `http://localhost:5000/api/users` (with body)
   - PUT: `http://localhost:5000/api/users/1` (with body)
   - DELETE: `http://localhost:5000/api/users/1`

## 🐛 Troubleshooting

### MySQL Connection Issues

**Error: `connect ECONNREFUSED 127.0.0.1:3306`**

Solution:
```bash
# Start MySQL service
mysql.server start          # macOS
sudo systemctl start mysql  # Linux
net start MySQL80           # Windows

# Or verify MySQL is running
mysql -u root -p -e "SELECT 1"
```

### Backend Won't Start

**Check Node modules:**
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Port Already in Use

**Backend (Port 5000):**
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9        # macOS/Linux
netstat -ano | findstr :5000         # Windows
taskkill /PID <PID> /F              # Windows
```

**Frontend (Port 5173):**
```bash
# Vite will automatically try next port (5174, 5175...)
# Or change port in vite.config.js
```

### CORS Error in Frontend

**Error: `Access to XMLHttpRequest blocked by CORS`**

Solution: Ensure backend `.env` has:
```
CORS_ORIGIN=http://localhost:5173
```

Or in `server.js`:
```javascript
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
```

### Database Permission Denied

**For MySQL user:**
```bash
mysql -u root -p
mysql> GRANT ALL PRIVILEGES ON avio_db.* TO 'root'@'localhost';
mysql> FLUSH PRIVILEGES;
```

## 📱 Testing the Full Stack

### Scenario 1: View Users
1. Open `http://localhost:5173`
2. Users load automatically
3. Check browser Network tab
4. Should see request to API endpoint

### Scenario 2: Search Users
1. Type in search box
2. Results filter in real-time
3. No API calls made (local filtering)

### Scenario 3: Add User
1. Click "+ Add User" button
2. New row appears in table
3. User counter increases
4. Refresh page - new user persists (if using local API)

### Scenario 4: Delete User
1. Click "Delete" button on any row
2. User removed immediately
3. Table updates
4. User counter decreases

## 📊 Sample Data

The backend includes 20 sample users from various countries and companies:

- Emily Johnson - Tech Corp - Software Engineer - USA
- Michael Williams - Innovation Labs - Product Manager - USA
- Sarah Brown - Digital Solutions - UX Designer - UK
- David Miller - Cloud Systems - DevOps Engineer - Canada
- Jessica Davis - AI Ventures - Data Scientist - USA
- ... and 15 more

View all in `backend/database/init.sql`

## 🔄 Development Workflow

### Daily Development

```bash
# Terminal 1: Start Backend
cd backend
npm run dev

# Terminal 2: Start Frontend
cd client-app
npm run dev

# Terminal 3: (Optional) MySQL Monitor
mysql -u root -p
mysql> USE avio_db;
mysql> SELECT * FROM users;
```

### Making Changes

**Backend API:**
- Edit files in `backend/routes/`, `backend/models/`
- Server auto-restarts (may need manual restart)
- Test with Postman or cURL

**Frontend:**
- Edit files in `client-app/src/`
- Auto-reload enabled (HMR)
- Test in browser

## 📚 Documentation Files

- **Backend**: `backend/README.md` - Detailed API documentation
- **Frontend**: `client-app/README.md` - React app documentation
- **This file**: Complete project setup guide

## 🚀 Deployment Preparation

### Before Going Live

1. **Backend**
   - [ ] Update `.env` with production credentials
   - [ ] Set `NODE_ENV=production`
   - [ ] Enable HTTPS
   - [ ] Set up database backups
   - [ ] Configure logging
   - [ ] Add rate limiting
   - [ ] Set up monitoring

2. **Frontend**
   - [ ] Update API endpoint to production URL
   - [ ] Run `npm run build`
   - [ ] Test production build
   - [ ] Set up CI/CD

3. **Database**
   - [ ] Create database backup strategy
   - [ ] Set up replication (if needed)
   - [ ] Optimize indexes
   - [ ] Configure backups

## 📞 Support Resources

- **Node.js**: https://nodejs.org/
- **Express**: https://expressjs.com/
- **React**: https://react.dev/
- **MySQL**: https://dev.mysql.com/doc/
- **Vite**: https://vitejs.dev/

## ✅ Project Checklist

- [x] Backend API with Express
- [x] MySQL database setup
- [x] React frontend
- [x] User CRUD operations
- [x] Search/Filter functionality
- [x] Toast notifications
- [x] Error handling
- [x] Documentation
- [x] Sample data
- [ ] Authentication (future)
- [ ] Rate limiting (future)
- [ ] API tests (future)

## 🎉 Success!

Your AVIO User Management application is now ready to use!

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000/api/users
- **Health Check**: http://localhost:5000/health

---

**Happy coding! 🚀**
