# 📝 Notes Management Frontend

A responsive React-based frontend for the Notes Management application. The frontend provides a user-friendly interface for authentication, creating notes, viewing notes, editing notes, deleting notes, and accessing admin functionality. It communicates with the FastAPI backend through REST APIs and uses JWT-based authentication for protected operations.

---

## ✨ Features

- 🔐 User registration and login
- 🎟️ JWT-based authentication
- 👤 Role-based access control
- 📝 Create notes
- 📋 View personal notes
- ✏️ Edit notes
- 🗑️ Delete notes
- 👨‍💼 Admin dashboard
- 📊 Admin can view all notes
- ⚠️ User-friendly error handling
- ⏳ Loading states during API requests
- 📱 Responsive user interface
- 🐳 Docker support
- 🔄 REST API integration with FastAPI backend

---

## 🛠️ Technologies

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| JavaScript | Application logic |
| Vite | Development server and build tool |
| CSS | Styling and responsive layout |
| REST API | Communication with FastAPI backend |
| JWT | Authentication and authorization |
| React Context API | Global authentication state |
| Fetch API | Sending HTTP requests |
| Docker | Frontend containerization |
| Docker Compose | Managing the full application stack |

---

## 📁 Project Structure

```
notes-frontend/
│
├── src/
│   │
│   ├── components/
│   │   └── Navbar.jsx
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── pages/
│   │   ├── Admin.jsx
│   │   ├── CreateNote.jsx
│   │   ├── EditNote.jsx
│   │   ├── Login.jsx
│   │   ├── Notes.jsx
│   │   └── Register.jsx
│   │
│   ├── services/
│   │   ├── admin.js
│   │   ├── api.js
│   │   ├── auth.js
│   │   └── notes.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
│
├── .env.example
├── Dockerfile
├── package.json
├── vite.config.js
├── index.html
└── README.md
```

---

## 📂 File & Folder Responsibilities

### src/components/

Contains reusable UI components.

**Navbar.jsx**

Provides navigation for authenticated users.

It allows users to:
- Navigate to My Notes
- Access Admin Dashboard when authorized
- Logout from the application

---

### src/pages/

Contains page-level React components.

**Login.jsx**

Handles user login.

It collects the username and password and calls the authentication context.

**Register.jsx**

Handles new user registration.

It validates the username and password before sending the data to the backend.

**Notes.jsx**

Displays the notes belonging to the currently authenticated user.

It supports:
- Fetching notes
- Editing notes
- Deleting notes
- Showing loading and error states

**CreateNote.jsx**

Provides a form for creating a new note.

It validates the input and sends the note data to the backend through createNote().

**EditNote.jsx**

Allows an existing note to be updated.

The selected note is passed from App.jsx, and the updated data is sent to the backend.

**Admin.jsx**

Displays the administrator dashboard.

It retrieves all notes through the protected admin API endpoint.

---

## 🔐 Authentication Context

### src/context/AuthContext.jsx

This file manages authentication state globally using React Context API.

It stores:
- JWT access token
- User role
- Login function
- Logout function
- Authentication status

The JWT token is also stored in localStorage so that the user remains authenticated after refreshing the browser.

**React Context API Benefits**

Without Context API, the JWT token would have to be passed through multiple components using props. Context provides centralized authentication state that can be accessed using:

```
const { token, role, login, logout } = useAuth();
```

---

## 🔌 Services

The services/ directory contains all communication between the React frontend and FastAPI backend. This separates API logic from UI components.

**services/auth.js**

Handles authentication-related API requests:
- User login
- User registration

Login sends credentials using the format expected by FastAPI's OAuth2 password authentication. Registration sends user information as JSON.

**services/notes.js**

Handles note-related API operations:
- GET notes
- POST note
- PUT note
- DELETE note

All protected requests include the JWT token:

```
Authorization: Bearer <token>
```

**services/admin.js**

Handles administrator-specific API requests.

It communicates with:
- GET /api/v1/admin/notes

The JWT token is included in the Authorization header.

**services/api.js**

Contains general API-related functionality used by the frontend.

The application keeps API communication inside the services layer rather than directly inside UI components.

---

## 🧠 Main Application

### src/App.jsx

App.jsx controls the main application flow.

It decides which page should be displayed based on:
- Authentication status
- Current page
- User role
- Selected note

The application uses React state for page navigation instead of React Router.

Example:
```
const [page, setPage] = useState("login");
```

Possible application states include:
- login
- register
- notes
- create
- edit
- admin

---

## 🚀 Application Entry Point

### src/main.jsx

This is the entry point of the React application.

It renders App inside AuthProvider.

```
main.jsx
   ↓
AuthProvider
   ↓
App
   ↓
Pages / Components
```

AuthProvider wraps App to make authentication state available throughout the entire application.

---

## 🌐 Frontend ↔ Backend Interaction

The frontend communicates with the FastAPI backend through REST APIs.

The overall architecture is:

```
                    User
                     │
                     ▼
              React Frontend
                  (Vite)
                     │
                     │ HTTP / REST API
                     ▼
             FastAPI Backend
                     │
                     │ SQLAlchemy
                     ▼
              PostgreSQL DB
```

---

## 🔄 API Request Flow

When a user performs an action, the following process occurs:

```
User Action
    │
    ▼
React Component
    │
    ▼
Service Function
    │
    ▼
Fetch API Request
    │
    ▼
FastAPI Endpoint
    │
    ▼
Backend Validation
    │
    ▼
Database Operation
    │
    ▼
JSON Response
    │
    ▼
React State Update
    │
    ▼
UI Re-render
```

For example, when creating a note:

```
CreateNote.jsx
      │
      ▼
createNote()
      │
      ▼
POST /api/v1/notes/
      │
      ▼
FastAPI
      │
      ▼
PostgreSQL
      │
      ▼
Created Note
      │
      ▼
React UI
```

---

## 🔐 JWT Authentication Flow

The application uses JWT authentication.

**Login Flow**

```
1. User enters username/password
              ↓
2. Login.jsx calls AuthContext
              ↓
3. AuthContext calls loginUser()
              ↓
4. auth.js sends credentials to FastAPI
              ↓
5. FastAPI validates credentials
              ↓
6. Backend generates JWT
              ↓
7. Frontend receives access token
              ↓
8. Token is stored in localStorage
              ↓
9. Token is stored in React state
```

**Protected Requests**

```
React
  │
  ▼
Service Function
  │
  ▼
Authorization: Bearer <JWT>
  │
  ▼
FastAPI
  │
  ▼
JWT Validation
  │
  ▼
Authorized Request
```

---

## 👥 Role-Based Access Control

The user's role is stored inside the JWT payload.

The frontend reads the role from the token:

```
JWT
 │
 └── payload
       │
       └── role
```

The application supports role-based behavior such as:

**User**
- Access personal notes

**Admin**
- Access personal notes
- Access Admin Dashboard

The frontend hides/restricts admin functionality for normal users. However, authorization is ultimately enforced by the FastAPI backend, so frontend checks are only for user experience and navigation.

---

## 🔗 API Endpoints Used

**Authentication**

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | /api/v1/auth/register | Register a new user |
| POST | /api/v1/auth/login | Login and receive JWT |

**Notes**

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | /api/v1/notes/ | Get user's notes |
| POST | /api/v1/notes/ | Create a note |
| PUT | /api/v1/notes/{id} | Update a note |
| DELETE | /api/v1/notes/{id} | Delete a note |

**Admin**

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | /api/v1/admin/notes | Get all notes for admin |

---

## ⚙️ Environment Configuration

The frontend backend URL is configured through a Vite environment variable.

Create a .env file inside the frontend directory:

```
VITE_API_URL=http://localhost:8000
```

The application reads it using:

```
const API_URL = import.meta.env.VITE_API_URL;
```

It prevents the backend URL from being hardcoded throughout the application. Different environments can use different backend URLs:

- Development → http://localhost:8000
- Production → https://your-production-api

---

## 🔒 .env and .env.example

The repository contains:

**.env.example**

```
VITE_API_URL=http://localhost:8000
```

.env.example is safe to commit because it contains only a sample configuration. The actual .env file should not be committed when it contains private configuration.

Note: Vite variables prefixed with VITE_ are available to frontend code, so they should never contain passwords, database credentials, JWT secrets, or other sensitive secrets.

---

## 🐳 Docker Setup

The project uses Docker for containerization.

The root-level docker-compose.yml is used as the centralized configuration file for the application stack.

```
Project Root
│
├── docker-compose.yml
│
├── Day4project/
│   └── FastAPI Backend
│
└── notes-frontend/
    ├── Dockerfile
    └── React Frontend
```

**Why Docker Compose?**

Docker Compose allows the frontend, backend, and database to be managed together.

It centralizes:
- Service configuration
- Port mapping
- Environment configuration
- Service dependencies
- Docker networking
- Database persistence

---

## 🐳 Docker Architecture

```
┌──────────────────────────┐
│      React Frontend      │
│        Port 5173         │
└────────────┬─────────────┘
             │
             │ REST API
             ▼
┌──────────────────────────┐
│     FastAPI Backend      │
│        Port 8000         │
└────────────┬─────────────┘
             │
             │ SQLAlchemy
             ▼
┌──────────────────────────┐
│       PostgreSQL         │
│        Port 5432         │
└──────────────────────────┘
```

All services are managed through the centralized docker-compose.yml.

---

## ▶️ Running with Docker Compose

From the project root:

```
docker compose up --build
```

To run containers in the background:

```
docker compose up -d
```

To stop the application:

```
docker compose down
```

To view logs:

```
docker compose logs -f
```

---

## 🧩 Frontend Container

The Dockerfile defines how the React frontend is packaged into a Docker image.

It provides a consistent environment for:
- Installing Node.js dependencies
- Building/running the React application
- Running the frontend inside a container

---

## 🏗️ Application Architecture

The frontend follows a layered structure:

```
React UI
   │
   ├── Pages
   │
   ├── Components
   │
   └── Context
          │
          ▼
      Services
          │
          ▼
       REST API
          │
          ▼
      FastAPI
```

**Responsibilities**

- **Pages**: Handle user-facing screens and UI interactions.
- **Components**: Contain reusable interface elements.
- **Context**: Manages global authentication state.
- **Services**: Handle communication with the backend.
- **FastAPI**: Handles business logic, authentication, authorization, and database operations.

---

## 📊 State Management

The application uses React Hooks and Context API.

**useState**

Used for local component state such as:
- Form inputs
- Loading state
- Error messages
- Notes
- Selected note

**useEffect**

Used for operations that should happen when component state changes, such as fetching notes after authentication.

**Context API**

Used for global authentication state:
- JWT Token
- Role
- Login
- Logout
- Authentication Status

---

## ⚠️ Error Handling

The frontend checks HTTP responses using:

```
if (!response.ok)
```

FastAPI error messages are extracted from the response:

```
errorData.detail
```

This allows the frontend to display meaningful errors such as:
- Invalid credentials
- Authentication required
- Note not found
- Access denied

Loading states are also displayed while API requests are being processed.

---

## 📜 Available Scripts

| Command | Purpose |
|---------|---------|
| npm run dev | Start development server |
| npm run build | Create production build |
| npm run preview | Preview production build |

---

## 🔒 Security Considerations

- JWT is required for protected API requests.
- Authorization headers use the Bearer token format.
- Admin functionality is restricted based on user role.
- Backend authorization remains the final security layer.
- Sensitive secrets should not be stored in frontend environment variables.
- .env.example contains only non-sensitive example configuration.

---

