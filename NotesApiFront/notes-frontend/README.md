# 📝 Notes Management Frontend

A modern, responsive React-based frontend for the Notes Management application. Built with Vite, featuring JWT authentication, role-based access control, and a clean, intuitive user interface.

> **Full-stack experience** — authentication flows, state management, API integration, and responsive design working seamlessly together.

---

## 🌟 Key Features

✅ **Authentication & Authorization**
- User registration and login with JWT tokens
- Secure token storage in localStorage
- Role-based access control (User vs Admin)
- Auto-login on page refresh

✅ **Notes Management**
- Create notes with title and content
- View all personal notes
- Edit existing notes
- Delete notes with confirmation
- Real-time list updates

✅ **Admin Dashboard**
- View all notes across all users
- Admin-only access restriction
- System-wide note overview

✅ **User Experience**
- Responsive design (mobile & desktop)
- Dark-mode themed UI
- Loading states during API calls
- User-friendly error messages
- Smooth navigation between pages
- Confirmation modals for critical actions

✅ **Developer Experience**
- Clean component architecture
- Centralized API services layer
- Global authentication context
- Environment configuration management
- Docker containerization included

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **UI Framework** | React 18 | Component-based UI |
| **Build Tool** | Vite | Fast development & production builds |
| **Styling** | CSS3 | Responsive design & dark theme |
| **State Management** | React Hooks + Context API | Auth state management |
| **HTTP Client** | Fetch API | API communication |
| **Authentication** | JWT (Bearer tokens) | Stateless authentication |
| **Containerization** | Docker | Consistent deployment |

---

## 📂 Project Structure

```
notes-frontend/
│
├── src/
│   ├── components/              # Reusable UI components
│   │   └── Navbar.jsx           # Navigation bar with logout
│   │
│   ├── context/
│   │   └── AuthContext.jsx      # Global authentication state
│   │
│   ├── pages/                   # Page-level components
│   │   ├── Login.jsx            # Login form & flow
│   │   ├── Register.jsx         # User registration form
│   │   ├── Notes.jsx            # Personal notes list & actions
│   │   ├── CreateNote.jsx       # Note creation form
│   │   ├── EditNote.jsx         # Note editing form
│   │   └── Admin.jsx            # Admin dashboard (all notes)
│   │
│   ├── services/                # API communication layer
│   │   ├── api.js               # General API utilities
│   │   ├── auth.js              # Authentication endpoints
│   │   ├── notes.js             # Notes CRUD endpoints
│   │   └── admin.js             # Admin endpoints
│   │
│   ├── App.jsx                  # Main app logic & routing
│   ├── main.jsx                 # React app entry point
│   └── index.css                # Global styles & theme
│
├── public/                      # Static assets
│
├── .env.example                 # Environment template
├── Dockerfile                   # Container configuration
├── package.json                 # Dependencies
├── vite.config.js               # Vite configuration
├── index.html                   # HTML entry point
└── README.md
```

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────┐
│   React UI Components               │
│   (Login, Notes, Admin)             │
└────────────────┬────────────────────┘
                 │
┌────────────────▼────────────────────┐
│   Global State (AuthContext)        │
│   - JWT Token                       │
│   - User Role                       │
│   - Login/Logout Functions          │
└────────────────┬────────────────────┘
                 │
┌────────────────▼────────────────────┐
│   Service Layer (services/)         │
│   - auth.js (login/register)        │
│   - notes.js (CRUD operations)      │
│   - admin.js (admin endpoints)      │
└────────────────┬────────────────────┘
                 │
┌────────────────▼────────────────────┐
│   Fetch API (HTTP Requests)         │
│   Bearer Token in Headers           │
└────────────────┬────────────────────┘
                 │
┌────────────────▼────────────────────┐
│   FastAPI Backend                   │
│   (Port 8000)                       │
└─────────────────────────────────────┘
```

**Why This Structure?**
- **Separation of Concerns:** UI, state, and API logic are separate
- **Reusability:** Services can be called from any component
- **Testability:** Each layer can be tested independently
- **Maintainability:** Changes in one layer don't cascade to others

---

## 🚀 Quick Start & Setup

### Prerequisites
- Node.js 16+ and npm
- Backend API running on http://localhost:8000
- Test credentials (provided below)

### Step 1: Install Dependencies

```bash
cd notes-frontend
npm install
```

### Step 2: Setup Environment

```bash
# Copy example environment
cp .env.example .env

# Edit .env (optional - defaults to localhost:8000)
# VITE_API_URL=http://localhost:8000
```

### Step 3: Start Development Server

```bash
npm run dev

# Frontend will be available at: http://localhost:5173
```

### Step 4: Login with Test Credentials

| Username | Password | Role | Access |
|----------|----------|------|--------|
| **Hiba** | **123456** | User | Personal notes only |
| **Ali** | **654321** | User | Personal notes only |
| **admin** | **admin** | Admin | All user notes + Admin Dashboard |

**Try it:**
1. Go to http://localhost:5173
2. Click "Login"
3. Enter: `Hiba` / `123456`
4. Start creating notes!

---

## 🔄 Full-Stack Setup (Frontend + Backend)

### Option 1: Docker Compose (Recommended)

From project root:
```bash
docker compose up --build
```

This starts:
- Frontend: http://localhost:5173
- Backend: http://localhost:8000
- Database: PostgreSQL on 5432

### Option 2: Manual Setup

**Terminal 1 - Backend:**
```bash
cd Day4project
source venv/bin/activate
python app/main.py
# Backend runs on http://localhost:8000
```

**Terminal 2 - Frontend:**
```bash
cd notes-frontend
npm run dev
# Frontend runs on http://localhost:5173
```

---

## 🔐 Authentication System

### Login Flow

```
User Inputs Credentials
        ↓
Login.jsx calls useAuth() hook
        ↓
AuthContext.login(username, password)
        ↓
auth.js sends POST to /api/v1/auth/login
        ↓
Backend validates credentials
        ↓
Backend returns JWT token
        ↓
Token stored in localStorage
        ↓
Token stored in React state
        ↓
User redirected to Notes page
        ↓
All subsequent requests include token
```

### Protected API Requests

```javascript
// Example from services/notes.js
const response = await fetch(`${API_URL}/api/v1/notes`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});
```

Every request to protected endpoints includes:
```
Authorization: Bearer <JWT_TOKEN>
```

### JWT Token Storage

```javascript
// Token is stored in two places:

// 1. localStorage (persists across browser refresh)
localStorage.setItem('authToken', token);

// 2. React state (used during current session)
const [token, setToken] = useState(localStorage.getItem('authToken'));

// User stays logged in even after page refresh
useEffect(() => {
  const savedToken = localStorage.getItem('authToken');
  if (savedToken) setToken(savedToken);
}, []);
```

---

## 📡 API Integration

### Service Layer Architecture

```
src/services/
├── api.js          # Base configuration & utilities
├── auth.js         # POST /auth/register, login
├── notes.js        # GET/POST/PUT/DELETE /notes
└── admin.js        # GET /admin/notes
```

### Authentication Service (services/auth.js)

```javascript
// Register new user
export const registerUser = async (username, password) => {
  const response = await fetch(`${API_URL}/api/v1/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  return response.json();
};

// Login user
export const loginUser = async (username, password) => {
  const response = await fetch(`${API_URL}/api/v1/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const data = await response.json();
  return data.access_token; // Returns JWT token
};
```

### Notes Service (services/notes.js)

```javascript
// Create a note
export const createNote = async (title, body, token) => {
  const response = await fetch(`${API_URL}/api/v1/notes`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  });
  return response.json();
};

// Get user's notes
export const getNotes = async (token) => {
  const response = await fetch(`${API_URL}/api/v1/notes`, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return response.json();
};

// Update a note
export const updateNote = async (id, title, body, token) => {
  const response = await fetch(`${API_URL}/api/v1/notes/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  });
  return response.json();
};

// Delete a note
export const deleteNote = async (id, token) => {
  const response = await fetch(`${API_URL}/api/v1/notes/${id}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return response.status === 204 ? { success: true } : response.json();
};
```

### Admin Service (services/admin.js)

```javascript
// Get all notes (admin only)
export const getAllNotes = async (token) => {
  const response = await fetch(`${API_URL}/api/v1/admin/notes`, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` }
  });
  
  if (!response.ok) {
    throw new Error('Not authorized to access admin endpoints');
  }
  
  return response.json();
};
```

---

## 🌐 API Endpoints Used

### Authentication
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/v1/auth/register` | Register new user |
| POST | `/api/v1/auth/login` | Login & get JWT token |

### Notes (Personal)
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/v1/notes` | Get user's notes |
| POST | `/api/v1/notes` | Create new note |
| PUT | `/api/v1/notes/{id}` | Update note |
| DELETE | `/api/v1/notes/{id}` | Delete note |

### Admin (System-wide)
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/v1/admin/notes` | Get all notes (admin only) |

---

## 🧠 Global State Management (AuthContext)

### What is AuthContext?

AuthContext provides global authentication state accessible from any component without prop drilling:

```javascript
// Inside any component
import { useAuth } from '../context/AuthContext';

const MyComponent = () => {
  const { token, role, login, logout, isAuthenticated } = useAuth();
  
  return (
    <>
      {isAuthenticated ? (
        <>
          <p>Welcome! Role: {role}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please login</p>
      )}
    </>
  );
};
```

### AuthContext State

```javascript
{
  token: "eyJhbGc...",           // JWT token
  role: "user" | "admin",        // User role
  isAuthenticated: true | false, // Auth status
  login: (username, password),   // Login function
  logout: (),                    // Logout function
}
```

### Why Context API?

**Without Context (prop drilling):**
```
App (has token)
  ↓ pass token as prop
  ↓ pass token as prop
  ↓ pass token as prop
  └── DeepComponent (finally receives token)
```
→ Tedious, hard to maintain

**With Context:**
```
App (provides token)
  └── AuthProvider
       └── Any component can useAuth()
```
→ Clean, simple, no prop drilling

---

## 📋 Page Components Explained

### Login.jsx
- Collects username & password
- Calls `login()` from AuthContext
- Navigates to Notes on success
- Displays errors from backend

**Example Flow:**
```javascript
const handleLogin = async () => {
  try {
    await login(username, password);
    setPage('notes'); // Redirect to notes
  } catch (error) {
    setError(error.message); // Show error
  }
};
```

### Register.jsx
- Form for new user registration
- Validates input before sending
- Calls `/api/v1/auth/register`
- Redirects to login on success

### Notes.jsx
- Displays list of user's notes
- Provides Edit & Delete buttons
- Shows loading state while fetching
- Shows error messages
- Navigate to CreateNote page

**Example:**
```javascript
useEffect(() => {
  const loadNotes = async () => {
    setLoading(true);
    try {
      const data = await getNotes(token);
      setNotes(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  loadNotes();
}, [token]);
```

### CreateNote.jsx
- Form with title & body fields
- Validates input
- Calls `createNote()` service
- Redirects to Notes on success

### EditNote.jsx
- Pre-fills form with note data
- Updates existing note
- Calls `updateNote()` service
- Returns to Notes on success

### Admin.jsx
- **Admin-only page** (restricted)
- Displays all notes from all users
- Shows user ownership info
- Non-admins get 403 error

---

## 🎨 Styling & Responsive Design

### Dark Theme
- Default dark mode throughout app
- Custom CSS variables for theming
- Eye-friendly color scheme

### Responsive Layout
- Mobile-first design
- Works on all screen sizes
- Touch-friendly buttons
- Readable on small screens

### Component Styling Examples

**Navbar (Navigation)**
```css
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #1a1a1a;
}
```

**Notes Grid**
```css
.notes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
```

---

## 📝 Component File Breakdown

### Navbar.jsx
```javascript
const Navbar = ({ role, onLogout }) => {
  return (
    <nav className="navbar">
      <h1>📝 Notes</h1>
      <div className="nav-links">
        <a href="#notes">My Notes</a>
        {role === 'admin' && <a href="#admin">Admin</a>}
        <button onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
};
```

### NoteCard Component
```javascript
const NoteCard = ({ note, onEdit, onDelete }) => {
  return (
    <div className="note-card">
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <div className="actions">
        <button onClick={() => onEdit(note)}>Edit</button>
        <button onClick={() => onDelete(note.id)}>Delete</button>
      </div>
    </div>
  );
};
```

---

## ⚙️ Environment Configuration

### .env File
```env
VITE_API_URL=http://localhost:8000
```

### Vite Environment Variables

Vite exposes environment variables prefixed with `VITE_`:

```javascript
// In your component
const API_URL = import.meta.env.VITE_API_URL;
// Becomes: http://localhost:8000
```

**Important:** 
- ❌ Never store passwords or secrets in frontend env vars
- ❌ VITE_ variables are visible in browser (public)
- ✅ Use .env.example for documenting configuration
- ✅ Add .env to .gitignore

### Different Environments

```env
# .env.development
VITE_API_URL=http://localhost:8000

# .env.production
VITE_API_URL=https://api.example.com
```

---

## 🐳 Docker & Containerization

### Frontend Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Runtime stage
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 5173
CMD ["serve", "-s", "dist", "-l", "5173"]
```

### Docker Compose (Full Stack)

From project root, `docker-compose.yml`:
```yaml
version: '3.8'

services:
  frontend:
    build: ./notes-frontend
    ports:
      - "5173:5173"
    environment:
      - VITE_API_URL=http://backend:8000
    depends_on:
      - backend

  backend:
    build: ./Day4project
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/notesdb
    depends_on:
      - db

  db:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: password
      POSTGRES_DB: notesdb
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### Running with Docker Compose

```bash
# Start all services
docker compose up --build

# Run in background
docker compose up -d

# View logs
docker compose logs -f frontend

# Stop services
docker compose down
```

---

## 🔄 Complete Data Flow Example

### Creating a Note (Step-by-Step)

```
1. USER ACTION
   └── User fills form: title="My Note", body="Content"

2. COMPONENT (CreateNote.jsx)
   └── onClick handleSubmit()

3. SERVICE CALL (notes.js)
   └── createNote(title, body, token)

4. FETCH REQUEST
   └── POST /api/v1/notes
       Headers: Authorization: Bearer <token>
       Body: { title, body }

5. BACKEND (FastAPI)
   └── Validate request
   └── Check authentication
   └── Check ownership (if update)
   └── Save to database

6. RESPONSE
   └── { id: 1, title: "My Note", body: "Content", ... }

7. STATE UPDATE (React)
   └── setNotes([...notes, newNote])

8. UI RENDER
   └── New note appears in list
```

---

## 🧪 Testing Scenarios

### Scenario 1: Regular User Login & Create Note

```
1. Go to http://localhost:5173
2. Click "Login"
3. Enter: Hiba / 123456
4. Click "Create Note"
5. Fill: Title="First Note", Body="Hello World"
6. Click "Save"
7. Note appears in "My Notes" list
```

### Scenario 2: Admin Access All Notes

```
1. Login with: admin / admin
2. Click "Admin Dashboard"
3. See all notes from all users (Hiba's, Ali's notes)
4. Cannot delete other users' notes (frontend restriction)
```

### Scenario 3: Token Expiration

```
1. Token expires after 30 minutes
2. Next API call returns 401 Unauthorized
3. AuthContext catches error
4. User is logged out
5. Redirected to login page
6. User must login again
```

---

## 🚢 Available npm Scripts

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Create optimized production build
npm run preview  # Preview production build locally
npm run lint     # Check code quality (if configured)
```

---

## ⚠️ Error Handling

The frontend gracefully handles API errors:

```javascript
try {
  const data = await getNotes(token);
  setNotes(data);
} catch (error) {
  if (error.status === 401) {
    // Token expired or invalid
    logout();
    setError("Please login again");
  } else if (error.status === 403) {
    // Not authorized for this operation
    setError("You don't have permission");
  } else if (error.status === 404) {
    // Resource not found
    setError("Note not found");
  } else {
    setError("Something went wrong");
  }
}
```

**Common Errors:**
| Error | Cause | Solution |
|-------|-------|----------|
| 401 Unauthorized | Token missing or expired | Login again |
| 403 Forbidden | Not authorized (admin only) | Only admins can access |
| 404 Not Found | Note doesn't exist/not yours | Note may be deleted |
| 500 Server Error | Backend error | Check backend logs |

---

## 🔒 Security Best Practices

✅ **Implemented:**
- JWT tokens in Authorization header
- Tokens stored in localStorage
- CORS handled by backend
- Admin endpoints restricted by frontend UI
- No sensitive data in environment variables
- VITE_ prefix prevents exposure of secrets

⚠️ **Remember:**
- Backend always validates authorization (frontend is just UX)
- Never trust frontend authorization checks alone
- Tokens are visible in browser (don't store passwords)
- Use HTTPS in production

---

## 📦 Dependencies

**Main Dependencies** (from package.json):
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "vite": "^4.0.0",
    "@vitejs/plugin-react": "^3.0.0"
  }
}
```

**Why Minimal Dependencies?**
- Fast builds with Vite
- No heavy libraries
- Fetch API for HTTP (no Axios needed)
- React Context for state (no Redux needed)
- Native CSS (no Tailwind needed)

---

## 📖 Learning Concepts

### React Concepts Used
- **Components:** Functional components with JSX
- **Hooks:** useState, useEffect, useContext
- **Context API:** Global state management
- **Conditional Rendering:** Show/hide based on auth state
- **Lists:** Rendering dynamic note lists

### Web API Concepts
- **Fetch API:** Making HTTP requests
- **localStorage:** Persistent token storage
- **JSON:** Data serialization
- **Headers:** Authorization headers

### Security Concepts
- **JWT:** Stateless authentication tokens
- **Bearer tokens:** Token transmission format
- **CORS:** Cross-origin resource sharing
- **Role-based access:** Admin vs user roles

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| "Failed to fetch" | Backend not running or CORS error |
| "Invalid credentials" | Wrong username/password, check test credentials |
| "401 Unauthorized" | Token missing or expired, login again |
| "Cannot read token" | localStorage cleared, login again |
| Blank page | Check browser console for errors, ensure backend is running |
| Slow performance | Check network tab, ensure backend responds quickly |

---

## 🔗 Related Resources

- **React Docs:** https://react.dev
- **Vite Docs:** https://vitejs.dev
- **Fetch API:** https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- **JWT.io:** https://jwt.io
- **CORS:** https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

---

## 📁 Full-Stack Integration

**Frontend ↔ Backend Communication:**

```
Frontend (React, Vite)
       ↓ HTTP REST API
Backend (FastAPI)
       ↓ SQLAlchemy ORM
Database (PostgreSQL)
```

**Deployment:** Both frontend and backend can be deployed using Docker Compose for consistency.

---

## ✨ Key Takeaways

✅ Modern React with Vite for fast development  
✅ Clean architecture with separation of concerns  
✅ JWT authentication with global state management  
✅ Responsive, user-friendly interface  
✅ Proper error handling and loading states  
✅ Docker-ready for production deployment  
✅ Test credentials included for immediate testing  

---

## 📊 Project Objectives Met

✅ Build responsive React frontend with Vite  
✅ Implement JWT authentication flow  
✅ Create role-based access control UI  
✅ Build complete CRUD interface for notes  
✅ Separate API logic into services layer  
✅ Manage global state with Context API  
✅ Handle errors gracefully  
✅ Create Docker-compatible deployment  
✅ Responsive mobile-friendly design  

---
