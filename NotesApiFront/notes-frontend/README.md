# Notes Management Frontend

A responsive React frontend for the Notes Management application. It provides user authentication, note management, and seamless communication with the FastAPI backend through REST APIs.

## 📋 Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [File & Folder Descriptions](#file--folder-descriptions)
- [Architecture](#architecture)
- [API Integration](#api-integration)
- [Authentication & Authorization](#authentication--authorization)
- [Author](#author)
- [Project Status](#project-status)

---

## ✨ Features

- 🔐 User Authentication with JWT tokens
- 📝 Create, Read, Update, Delete notes functionality
- 🎨 Responsive and modern user interface
- 👥 Role-based access control integration
- ⚡ Fast performance with Vite build tool
- 🐳 Docker containerization support
- 🔄 Seamless backend integration

---

## 🛠️ Technologies

| Technology | Purpose |
|-----------|---------|
| React | Frontend UI framework |
| Vite | Modern build tool and development server |
| JavaScript | Programming language |
| CSS | Styling and layout |
| REST API | Backend communication |
| Docker | Application containerization |
| Node.js | Runtime environment |

---

## 📁 Project Structure

```
notes-frontend/
│
├── src/
│   ├── components/
│   │   └── Reusable UI components
│   │
│   ├── pages/
│   │   └── Application page components
│   │
│   ├── services/
│   │   └── API communication functions
│   │
│   ├── context/
│   │   └── React Context for state management
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
│   └── Static assets
│
├── Dockerfile
├── package.json
├── vite.config.js
├── .env
├── .env.example
└── index.html
```

---

## 🔗 Backend Integration

This frontend is designed to work with the Notes API backend built using:

- FastAPI
- SQLAlchemy
- PostgreSQL
- Alembic
- JWT Authentication
- Role-Based Access Control

The backend provides the REST API while this project provides the user interface and client-side application logic.

---

## 📂 File & Folder Descriptions

### `src/components/`

Contains reusable UI components that are used across multiple pages. Components are kept separate from pages to maintain modularity and prevent code duplication. Examples include navigation bars, note cards, forms, buttons, modals, and headers.

**Purpose**: Component reusability and modular design

---

### `src/pages/`

Contains complete page-level components that represent different screens in the application. Each page handles specific functionality and uses components from the `components/` folder. Common pages include Login, Register, Notes List, and individual Note views.

**Purpose**: Screen-level functionality and routing

---

### `src/services/`

Contains functions that handle all communication with the FastAPI backend. API calls are centralized in this folder to keep components clean and prevent code duplication.

**Main files**:
- `auth.js` - User authentication, registration, and login
- `api.js` - Note operations (CRUD)
- Additional service files for specific endpoints

**Purpose**: Centralized API communication layer

---

### `src/context/`

Manages shared application state using React Context API. Provides authentication information and other global state to components throughout the application without prop drilling.

**Purpose**: Global state management

---

### `src/App.jsx`

The root application component that defines the overall structure and navigation flow. Connects different pages, sets up routing, and manages top-level application logic.

**Purpose**: Main application structure and routing

---

### `src/main.jsx`

The entry point of the React application. Renders the App component into the HTML root element and initializes the React application.

**Purpose**: Application initialization

---

### `src/index.css`

Contains global styling rules applied across the entire application. Includes typography, colors, spacing, and layout rules for consistency.

**Purpose**: Global styling and visual consistency

---

### `package.json`

Contains project metadata, dependencies, and npm scripts. Lists all required packages and provides commands for development and production builds.

**Purpose**: Dependency management

---

### `vite.config.js`

Configuration file for Vite build tool. Defines development server settings, build options, and proxy configuration.

**Purpose**: Build tool configuration

---

### `Dockerfile`

Defines how the React frontend is packaged into a Docker image. Sets up Node.js environment, installs dependencies, and configures containerization.

**Purpose**: Docker containerization

---

### `docker-compose.yml`

Centralized orchestration file for the entire application stack. Manages three services: React Frontend, FastAPI Backend, and PostgreSQL Database. Handles networking, port mapping, environment variables, and service dependencies.

**Manages**:
- Frontend service (port 5173)
- Backend service (port 8000)
- Database service (port 5432)
- Service networking and dependencies
- Environment configuration
- Volume persistence

**Purpose**: Unified application orchestration

---

## 🏗️ Architecture

### System Architecture

```
User Browser
     ↓
React Application (Vite)
     ↓ (HTTP REST API)
FastAPI Backend
     ↓ (SQL Queries)
PostgreSQL Database
```

### Frontend-Backend Communication

The frontend communicates with the backend through REST API endpoints. All requests include JWT authentication tokens for secure access. The backend validates tokens and enforces role-based access control before processing requests.

### Data Flow

1. User interacts with React UI
2. Component calls service function
3. Service makes HTTP request to backend
4. Backend processes request and queries database
5. Backend returns JSON response
6. Frontend updates React state
7. Component re-renders with updated data

### State Management Strategy

- **Component State**: React Hooks (useState) for local component state
- **Global State**: React Context for authentication and shared data
- **Persistence**: JWT tokens stored in browser local storage

---

## 🔌 API Integration

### Backend API Connection

Frontend connects to FastAPI backend through HTTP REST API. All API communication is handled through the `src/services/` folder functions.

### API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/auth/register` | POST | User registration |
| `/api/auth/login` | POST | User login and token generation |
| `/api/auth/me` | GET | Get current user info |
| `/api/notes` | GET | Retrieve all notes |
| `/api/notes` | POST | Create new note |
| `/api/notes/{id}` | GET | Get specific note |
| `/api/notes/{id}` | PUT | Update note |
| `/api/notes/{id}` | DELETE | Delete note |

### Request Format

All API requests include:
- `Content-Type: application/json` header
- `Authorization: Bearer {token}` header for authenticated endpoints
- JSON payload with required data

### Response Format

Backend responds with JSON containing:
- Success status
- Data or error messages
- Appropriate HTTP status codes

---

## 🔐 Authentication & Authorization

### JWT Authentication

Authentication flow:
1. User submits login credentials
2. Backend validates and generates JWT token
3. Frontend stores token in local storage
4. Token included in all subsequent API requests
5. Backend validates token before processing

### Role-Based Access Control

Three user roles with different permissions:
- **Admin**: Full access to all notes and user management
- **User**: Access to personal notes only
- **Viewer**: Read-only access to shared notes

Access control enforced on both frontend and backend.

### Token Management

- Tokens stored in browser local storage
- Automatically included in API request headers
- Expire after configured time period
- Users must re-login when token expires
- Logout clears token from local storage

---

## 🔄 Component Communication

Components communicate through:
- **Props**: For parent-to-child communication
- **Context API**: For global authentication state
- **Service Functions**: For backend communication
- **Event Handlers**: For user interactions

---

## 📊 Frontend Features

### Note Management
- View all user notes
- Create new notes
- Edit existing notes
- Delete notes
- Search and filter functionality

### User Interface
- Responsive design for mobile and desktop
- Intuitive navigation
- Form validation
- Error handling and user feedback
- Loading states

### Security
- JWT token-based authentication
- Protected routes for authenticated users
- Secure token storage
- HTTPS recommended for production

---

## 🎯 Development Principles

### Code Organization
- Separation of concerns (components, services, context)
- Reusable components to reduce duplication
- Centralized API communication
- Clean component hierarchy

### Best Practices
- Modular component design
- Clean function naming
- Proper error handling
- State management separation
- Context for global state

---

## 🌐 Deployment Targets

The application can be deployed to:
- Vercel - Optimized for React
- Netlify - Easy deployment
- GitHub Pages - Static hosting
- AWS S3 + CloudFront
- Custom servers
- Docker containers

---

## 📚 Related Documentation

- Backend: FastAPI with SQLAlchemy and PostgreSQL
- Database: PostgreSQL with Alembic migrations
- Authentication: JWT tokens with role-based access control
- API: RESTful endpoints for note management



---

**Version**: 1.0.0  
**Last Updated**: August 2024
