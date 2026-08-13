# Notes Management Frontend

A responsive React frontend for the Notes Management application. It provides user authentication, note management, and seamless communication with the FastAPI backend through REST APIs.

## 📋 Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [File & Folder Descriptions](#file--folder-descriptions)
- [Installation & Setup](#installation--setup)
- [Environment Configuration](#environment-configuration)
- [Running the Application](#running-the-application)
- [Docker Setup](#docker-setup)
- [Architecture](#architecture)
- [API Integration](#api-integration)

---

## ✨ Features

- 🔐 User Authentication with JWT tokens
- 📝 Create, Read, Update, Delete notes functionality
- 🎨 Responsive and modern user interface
- 👥 Role-based access control integration
- ⚡ Fast performance with Vite build tool
- 🐳 Docker containerization support
- 🔄 Real-time synchronization with backend

---

## 🛠️ Technologies

| Technology | Purpose |
|-----------|---------|
| React | Frontend UI framework |
| Vite | Modern build tool and development server |
| JavaScript | Programming language |
| CSS | Styling and layout |
| REST API | Backend communication protocol |
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

## 📂 File & Folder Descriptions

### `src/components/`

Contains all reusable UI components that are used across multiple pages. Components are kept separate from pages to maintain modularity and prevent code duplication. Examples include navigation bars, note cards, forms, buttons, modals, and headers.

**Purpose**: Reusability and modular design

---

### `src/pages/`

Contains complete page-level components that represent different screens in the application. Each page handles specific functionality and uses components from the `components/` folder. Common pages include Login, Register, Notes List, and individual Note views.

**Purpose**: Screen-level functionality and routing

---

### `src/services/`

Contains functions that handle all communication with the FastAPI backend. API calls are centralized in this folder to keep components clean and prevent duplication of API logic.

**Sub-files**:
- `auth.js` - Handles user registration and login requests, stores JWT tokens
- `api.js` - Handles note operations (create, read, update, delete)
- Other service files for specific backend endpoints

**Purpose**: Centralized API communication

---

### `src/context/`

Manages shared application state using React Context API. This folder contains context files that provide authentication information and other global state to components without passing props through every level.

**Purpose**: Global state management and authentication

---

### `src/App.jsx`

The main application component that defines the overall structure and navigation flow. It connects different pages, sets up routing, and manages the top-level application logic.

**Purpose**: Application structure and routing

---

### `src/main.jsx`

The entry point of the React application. It renders the main App component into the HTML root element and initializes the React application.

**Purpose**: Application initialization

---

### `src/index.css`

Contains all global styling rules that apply across the entire application. This includes typography, colors, spacing, and layout rules that should be consistent everywhere.

**Purpose**: Global styling and consistency

---

### `package.json`

Contains project metadata, dependencies, and npm scripts. Lists all required packages (React, Vite, etc.) and provides commands for development and production builds.

**Purpose**: Dependency management and scripts

---

### `vite.config.js`

Configuration file for Vite build tool. Defines development server settings, build options, and proxy configuration for API requests.

**Purpose**: Vite development and build configuration

---

### `Dockerfile`

Defines how the React frontend is packaged into a Docker image. It sets up the Node.js environment, installs dependencies, and configures the application to run in a container.

**Purpose**: Docker containerization

---

### `docker-compose.yml`

Centralized configuration file that orchestrates the entire application stack. It manages three services together: React Frontend, FastAPI Backend, and PostgreSQL Database. This file handles networking, port mapping, environment variables, and service dependencies.

**Benefits of Docker Compose**:
- Starts all services together
- Centralizes configuration
- Manages networking between services
- Persists database data with volumes
- Handles service dependencies
- Ensures consistency across environments

---

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v16.x or higher)
- npm or yarn package manager
- Git for cloning the repository
- Docker & Docker Compose (optional, for containerized setup)
- Backend API running and accessible

### Step 1: Clone the Repository

Using HTTPS:
```
git clone https://github.com/yourusername/notes-frontend.git
```

Using SSH:
```
git clone git@github.com:yourusername/notes-frontend.git
```

Then navigate to the project:
```
cd notes-frontend
```

### Step 2: Install Dependencies

Using npm:
```
npm install
```

Using yarn:
```
yarn install
```

### Step 3: Verify Installation

Check that Node.js and npm are properly installed:
```
node --version
npm --version
```

---

## 🔧 Environment Configuration

### Create .env File

Create a `.env` file in the project root directory:
```
touch .env
```

### Configure Variables

Add the following environment variables to `.env`:

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Base URL for FastAPI backend | `http://localhost:8000` |
| `VITE_ENV` | Application environment | `development` or `production` |
| `VITE_API_TIMEOUT` | API request timeout in milliseconds | `10000` |
| `VITE_JWT_STORAGE_KEY` | Local storage key for JWT token | `access_token` |

### Example .env Content

For local development:
```
VITE_API_BASE_URL=http://localhost:8000
VITE_ENV=development
VITE_API_TIMEOUT=10000
VITE_JWT_STORAGE_KEY=access_token
```

For Docker Compose:
```
VITE_API_BASE_URL=http://backend:8000
VITE_ENV=development
VITE_API_TIMEOUT=10000
VITE_JWT_STORAGE_KEY=access_token
```

### .env.example File

Create a `.env.example` file as a reference template:
```
VITE_API_BASE_URL=http://localhost:8000
VITE_ENV=development
VITE_API_TIMEOUT=10000
VITE_JWT_STORAGE_KEY=access_token
```

**Note**: Environment variables prefixed with `VITE_` are exposed to the client-side code during build time.

---

## 💻 Running the Application

### Local Development

Navigate to the frontend directory:
```
cd notes-frontend
```

Install dependencies:
```
npm install
```

Create and configure `.env` file as described above.

Start the development server:
```
npm run dev
```

The application will run on:
```
http://localhost:5173
```

### Production Build

Create optimized production build:
```
npm run build
```

This generates optimized files in the `dist/` folder.

### Preview Production Build

Preview the production build locally:
```
npm run preview
```

---

## 🐳 Docker Setup

### Using Docker Compose

From the project root, build and start all services:

```
docker-compose up --build
```

This starts three services:
- React Frontend on port 5173
- FastAPI Backend on port 8000
- PostgreSQL Database on port 5432

### Running in Background

```
docker-compose up -d
```

### Stopping Services

```
docker-compose down
```

### Viewing Logs

```
docker-compose logs -f frontend
```

### Dockerfile Details

The Dockerfile defines the containerization process. It typically:
1. Uses Node.js Alpine image as base
2. Sets up working directory
3. Copies package files
4. Installs dependencies
5. Copies source code
6. Exposes the development port
7. Runs the development server

### docker-compose.yml Structure

The docker-compose.yml file orchestrates three services:

**Frontend Service**:
- Runs React application on port 5173
- Builds from Dockerfile
- Environment variables for API connection
- Depends on backend service
- Shared network with other services

**Backend Service**:
- FastAPI application on port 8000
- Database configuration
- JWT secret configuration
- Depends on database service

**Database Service**:
- PostgreSQL on port 5432
- Persistent volume for data storage
- Environment variables for credentials
- Accessible to backend service

All services share a Docker network for internal communication.

---

## 🌐 Frontend Configuration

### API Connection

The frontend connects to the backend API at:
```
http://localhost:8000
```

The frontend application runs at:
```
http://localhost:5173
```

### Development Server

Vite development server runs on port 5173 by default. It provides:
- Hot Module Replacement (HMR) for instant updates
- Fast refresh when files change
- Development-optimized builds
- Source maps for debugging

### Port Configuration

If port 5173 is already in use, Vite will automatically use the next available port. Check the terminal output for the correct URL.

---

## 🏗️ Architecture

### System Architecture

```
User Browser
     ↓
React Application (Vite)
     ↓ (REST API calls)
FastAPI Backend
     ↓ (SQL queries)
PostgreSQL Database
```

### Service Communication

Frontend communicates with backend through HTTP REST APIs. All requests include JWT authentication tokens for secure access. The backend validates tokens and enforces role-based access control.

### Data Flow

1. User performs action in React UI
2. Component calls service function
3. Service makes HTTP request to backend
4. Backend processes request and queries database
5. Database returns data to backend
6. Backend returns JSON response
7. Frontend updates React state
8. Component re-renders with new data

### State Management

The application uses:
- React Hooks (useState) for component-level state
- React Context for global authentication state
- Local storage for JWT token persistence

---

## 🔌 API Integration

### Authentication

All API requests include JWT token in the Authorization header. The token is:
- Obtained during login
- Stored in browser local storage
- Sent with every authenticated request
- Validated by backend for access control

### API Endpoints

The frontend communicates with these backend endpoints:

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/auth/register` | POST | Register new user account |
| `/api/auth/login` | POST | User login and token generation |
| `/api/auth/me` | GET | Get current user information |
| `/api/notes` | GET | Retrieve all user notes |
| `/api/notes` | POST | Create new note |
| `/api/notes/{id}` | GET | Get specific note details |
| `/api/notes/{id}` | PUT | Update note content |
| `/api/notes/{id}` | DELETE | Delete note |

### Request Format

All requests are sent as JSON with:
- Content-Type: application/json header
- Authorization: Bearer {token} header
- Request body with required data

### Response Format

Backend responds with JSON containing:
- Success status
- Data or error messages
- HTTP status codes for error handling

---

## 🔐 Authentication & Authorization

### JWT Authentication Flow

1. User submits login credentials
2. Backend validates credentials
3. Backend generates JWT token
4. Frontend stores token in local storage
5. Token is included in all subsequent requests
6. Backend validates token before processing requests

### Role-Based Access Control

Different user roles have different permissions:
- Admin: Full access to all notes and user management
- User: Access to personal notes only
- Viewer: Read-only access to shared notes

Access control is enforced both on frontend and backend for security.

### Token Management

- Tokens are stored in browser local storage
- Tokens are automatically sent with API requests
- Tokens expire after a set time
- Users must login again when token expires
- Logout clears token from local storage

---

## 🧭 Navigation & Routing

The application provides navigation between:
- Login/Register pages for unauthenticated users
- Notes list page showing all user notes
- Note detail page for viewing/editing individual notes
- User dashboard or profile page

Navigation is protected so unauthenticated users cannot access note pages.

---

## 📊 Available Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 🐛 Troubleshooting

### Cannot Connect to Backend

Check that the FastAPI backend is running on the correct port. Verify the `VITE_API_BASE_URL` in the `.env` file matches the backend URL.

### Port Already in Use

If port 5173 is occupied, either stop the service using it or let Vite automatically use the next available port.

### Dependencies Not Installing

Clear the npm cache and node_modules folder, then reinstall all dependencies.

### Vite Not Detecting Changes

Restart the development server by stopping and restarting the npm run dev command.

### CORS Errors

Ensure the backend has CORS configured to accept requests from the frontend URL. Verify the API base URL is correct.

### JWT Token Issues

Clear the token from local storage and login again. Check browser developer tools to see if token is being stored and sent correctly.

### Docker Connection Issues

When using Docker Compose, the frontend should use `http://backend:8000` as the API URL instead of `http://localhost:8000`.

---

## 🚢 Deployment

### Production Build

Create an optimized production build:
```
npm run build
```

The optimized files are generated in the `dist/` folder.

### Deployment Platforms

The built application can be deployed to:
- Vercel - Popular for React applications
- Netlify - Simple drag-and-drop deployment
- GitHub Pages - Free static hosting
- AWS S3 + CloudFront
- Custom servers with nginx

### Production Environment Variables

Update `.env` with production values before building:
- Backend URL pointing to production API
- Environment set to production
- Appropriate timeout values

### Docker Deployment

For containerized deployment, use the provided Dockerfile and docker-compose.yml files.

---

