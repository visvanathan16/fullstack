# User Management Application

A modern React application for managing and displaying user data from the DummyJSON API with advanced filtering, sorting, and local state management capabilities.

## 📋 Features

- ✅ **Display User List** - View users in a clean, organized table format
- ✅ **User Fields** - Display Name, Company, Role, and Country information
- ✅ **Search/Filter** - Search users by name, company, role, or country in real-time
- ✅ **Refresh Button** - Reload the user list from the API
- ✅ **Add User** - Add static user records to the local array (non-API)
- ✅ **Delete User** - Remove users from the displayed list (local state only)
- ✅ **Toast Notifications** - User feedback for all actions
- ✅ **Responsive Design** - Works seamlessly on desktop and mobile
- ✅ **Error Handling** - Graceful error messages and recovery

## 🛠️ Tech Stack

- **React 19.2.0** - JavaScript UI library
- **Axios** - HTTP client for API requests
- **Vite** - Next-generation frontend tooling
- **CSS3** - Custom styling (no UI framework dependencies)
- **Node.js/npm** - Package management and build tools

## 📁 Project Structure

```
client-app/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Alert.jsx        # Alert/notification component
│   │   ├── Button.jsx       # Reusable button component
│   │   ├── SearchBox.jsx    # Search input component
│   │   ├── UserTable.jsx    # User data table component
│   │   └── LoadingSpinner.jsx # Loading indicator component
│   ├── utils/               # Utility functions
│   │   └── toast.js         # Toast notification utility
│   ├── App.jsx              # Main application component
│   ├── App.css              # Application styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                   # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
└── vite.config.js          # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd client-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)
   - The app will auto-reload on code changes

## 📖 Usage Guide

### Viewing Users
- The application automatically fetches the user list when it loads
- Users are displayed in a table with Name, Company, Role, and Country columns

### Searching Users
1. Click on the search input field
2. Type any search query (name, company, role, or country)
3. Results update in real-time as you type
4. Clear the search to see all users again

### Adding a User
1. Click the **"+ Add User"** button
2. A new user record is added to the local list
3. The user counter updates immediately
4. Note: This only affects local state, not the API

### Deleting a User
1. Find the user in the table
2. Click the **"Delete"** button in the Action column
3. The user is removed from the list immediately
4. The user counter updates automatically

### Refreshing the List
1. Click the **"⟳ Refresh"** button
2. The application fetches the latest data from the API
3. Any local additions or deletions are replaced with API data
4. A success notification confirms the refresh

## 🏗️ Code Architecture

### Component Design

**Reusable Components:**
- `SearchBox` - Controlled input component for search functionality
- `Button` - Flexible button component with multiple variants
- `Alert` - Displays error/info messages
- `UserTable` - Data table with row rendering and actions
- `LoadingSpinner` - Loading state indicator

### Hooks Usage

- **useState** - Manages user data, search query, loading, and error states
- **useEffect** - Initializes data fetching on component mount

### State Management

The app uses React's built-in state management with three main data arrays:
- `users` - Filtered/displayed users (changes with search)
- `apiUsers` - Original API data (reset on refresh)
- `loading` & `error` - UI state management

## 🎨 Styling

The application uses custom CSS with:
- Responsive Flexbox layouts
- Smooth transitions and animations
- Accessible color schemes
- Mobile-first design approach

### Color Palette
- **Primary**: #4299e1 (Blue)
- **Success**: #48bb78 (Green)
- **Error**: #f56565 (Red)
- **Info**: #4299e1 (Blue)
- **Warning**: #ed8936 (Orange)

## 📦 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🔄 Data Flow

```
User Action
    ↓
State Update (useState)
    ↓
Component Re-render
    ↓
DOM Update
    ↓
User Sees Changes
```

## 🌐 API Integration

- **Endpoint**: `https://dummyjson.com/users`
- **Method**: GET
- **Response**: JSON array of user objects
- **Fields Used**: firstName, lastName, company, address, email, phone, age, gender

### Example User Object
```json
{
  "id": 1,
  "firstName": "Emily",
  "lastName": "Johnson",
  "email": "emily@example.com",
  "phone": "+1-555-123-4567",
  "age": 28,
  "gender": "female",
  "company": {
    "name": "Tech Corp",
    "title": "Software Engineer"
  },
  "address": {
    "country": "United States"
  }
}
```

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically try the next available port (5174, 5175, etc.)

### API Not Loading
- Check your internet connection
- Verify the API endpoint is accessible
- Check browser console for CORS errors

### Styles Not Applying
- Clear browser cache (Ctrl+Shift+Delete)
- Restart the dev server
- Check CSS file is properly linked

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance Tips

- The search is case-insensitive and real-time
- Large user lists benefit from pagination (future enhancement)
- Toast notifications auto-dismiss after 3 seconds
- Components are lightweight and modular

## 🔐 Security Considerations

- No sensitive data is stored in local state
- API calls use standard HTTP (HTTPS in production)
- Input values are sanitized before filtering
- No authentication required for this demo

## 📝 Best Practices Implemented

✅ **Clean Code**
- Clear component separation
- Meaningful variable names
- Comprehensive comments and JSDoc

✅ **React Patterns**
- Proper use of hooks
- Unidirectional data flow
- Controlled components

✅ **Code Organization**
- Modular component structure
- Utility functions isolated
- Styles organized by sections

✅ **Error Handling**
- Try-catch blocks for async operations
- User-friendly error messages
- Graceful fallbacks

## 🔮 Future Enhancements

- [ ] Pagination for large datasets
- [ ] Sorting by column headers
- [ ] Edit user functionality
- [ ] Export user data to CSV
- [ ] Dark mode toggle
- [ ] User profile details modal
- [ ] Advanced filters
- [ ] Local storage persistence

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork and submit pull requests for improvements!

## 📧 Support

For issues or questions, please check the browser console for detailed error messages.

---

**Happy coding! 🎉**
