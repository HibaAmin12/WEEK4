# 📝 Notes API - Production-Grade Backend

A production-style CRUD REST API for managing user-owned notes with JWT authentication, role-based authorization, ownership-based access control, and Docker deployment.

> **Built to practice backend development fundamentals** — authentication, authorization, database design, security, and containerization working together in a real application.

---

## 🌟 Key Features

✅ **User Authentication & Security**
- Secure JWT-based authentication (OAuth2 compatible)
- Industry-standard password hashing (bcrypt)
- Protected endpoints with token validation

✅ **Role-Based Authorization (RBAC)**
- Standard Users: Full CRUD on personal notes only
- Admin Users: System-wide access across all user notes
- Ownership-based access control (prevent cross-user access)

✅ **Database & ORM**
- PostgreSQL relational database
- SQLAlchemy ORM for clean data modeling
- One-to-Many relationships (User → Notes, Category → Notes)

✅ **Database Migrations**
- Alembic migrations for version-controlled schema changes
- Reproducible database evolution across environments

✅ **REST API Design**
- RESTful endpoint design with proper HTTP methods
- API versioning (/api/v1) for future compatibility
- Interactive Swagger documentation included

✅ **Security-First**
- SQL injection prevention (parameterized queries via ORM)
- Ownership verification before data access
- Proper HTTP status codes (404 instead of 403 for privacy)

✅ **Production Deployment**
- Docker containerization for consistency
- Docker Compose for multi-service orchestration
- Environment variable configuration management

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Backend Framework** | FastAPI (Python 3.10+) |
| **Database** | PostgreSQL 16 |
| **ORM** | SQLAlchemy |
| **Migrations** | Alembic |
| **Authentication** | JWT + Passlib/Jose |
| **Validation** | Pydantic |
| **Server** | Uvicorn |
| **Containerization** | Docker + Docker Compose |

---

## 📂 Project Structure

```
Day4project/
│
├── app/
│   ├── main.py                 # FastAPI app entry point + router mounting
│   ├── database.py             # SQLAlchemy engine/session setup
│   ├── dependencies.py         # Reusable FastAPI dependencies
│   ├── models.py               # User, Note, Category ORM models
│   ├── schemas.py              # Pydantic request/response schemas
│   ├── oauth2.py               # JWT token creation/verification
│   ├── utils.py                # Password hashing utilities
│   │
│   └── routers/
│       ├── auth.py             # POST /api/v1/auth/register, login
│       ├── notes.py            # /api/v1/notes CRUD (ownership-scoped)
│       ├── categories.py       # /api/v1/categories endpoints
│       └── admin.py            # /api/v1/admin (admin-only endpoints)
│
├── alembic/
│   ├── versions/               # Database migration files
│   └── alembic.ini             # Alembic configuration
│
├── Dockerfile                  # FastAPI container configuration
├── docker-compose.yml          # Multi-service orchestration
├── requirements.txt            # Python dependencies
├── .env.example                # Environment configuration template
└── README.md                   # This file
```

---

## 🏗️ Application Architecture

The application follows a **layered architecture** for separation of concerns:

```
┌─────────────────────────────┐
│      Client/API Consumer    │
└──────────────┬──────────────┘
               │
┌──────────────▼──────────────┐
│      FastAPI Router         │
│    (Request routing)        │
└──────────────┬──────────────┘
               │
┌──────────────▼──────────────┐
│  Dependencies & Auth        │
│  (JWT verification)         │
└──────────────┬──────────────┘
               │
┌──────────────▼──────────────┐
│   Pydantic Schemas          │
│  (Input validation)         │
└──────────────┬──────────────┘
               │
┌──────────────▼──────────────┐
│   SQLAlchemy ORM            │
│  (Data modeling)            │
└──────────────┬──────────────┘
               │
┌──────────────▼──────────────┐
│      PostgreSQL             │
│      (Data persistence)     │
└─────────────────────────────┘
```

**Why This Structure?**
- **Maintainability:** Each layer handles one responsibility
- **Testability:** Easy to mock dependencies
- **Scalability:** Changes in one layer don't cascade
- **Clarity:** Clear data flow from request to database

---

## 🚀 Quick Start & Setup

### Prerequisites
- Python 3.10+
- PostgreSQL 16 (or use Docker)
- pip and virtual environment
- Git

### Step 1: Clone & Setup Backend

```bash
# Clone repository
git clone <repo-url>
cd Day4project

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Setup environment variables
cp .env.example .env
# Edit .env with your database credentials
```

### Step 2: Database Setup

```bash
# Create PostgreSQL database (if not using Docker)
createdb notesdb

# Apply migrations
alembic upgrade head

# Verify migrations
alembic current
```

### Step 3: Run the API

```bash
# Start the server
uvicorn app.main:app --reload

# API will be available at: http://127.0.0.1:8000
# Swagger UI: http://127.0.0.1:8000/docs
```

---

## 🐳 Docker Setup (Recommended)

### One-Command Deploy

```bash
# Build and start all services
sudo docker-compose up -d --build

# Check running containers
sudo docker ps

# View logs
sudo docker-compose logs -f api
```

### Database Migration in Docker

```bash
# Enter the API container
sudo docker exec -it day4project_api_1 bash

# Run migrations
alembic upgrade head

# Exit container
exit
```

---

## 🔑 Test Credentials

| Username | Password | Role | Access Scope |
|----------|----------|------|--------------|
| Hiba | 123456 | User | Personal notes only |
| Ali | 654321 | User | Personal notes only |
| admin | admin | Admin | All user notes |

**How to Test:**
1. Open http://127.0.0.1:8000/docs
2. Click "Authorize" button
3. Login with credentials above
4. Token will be stored automatically
5. All subsequent requests will include the token

---

## 📡 API Endpoints

### Authentication

**Register New User**
```
POST /api/v1/auth/register
Body: {
  "username": "newuser",
  "password": "securepass123"
}
Response: { "id": 1, "username": "newuser", "role": "user" }
```

**Login**
```
POST /api/v1/auth/login
Body: {
  "username": "Hiba",
  "password": "123456"
}
Response: {
  "access_token": "eyJhbGc...",
  "token_type": "bearer"
}
```

### Notes Management

**Create Note** (Requires Authentication)
```
POST /api/v1/notes
Headers: Authorization: Bearer <token>
Body: {
  "title": "My Note",
  "body": "Note content here",
  "category_id": 1
}
Response: { "id": 1, "title": "My Note", "owner_id": 1, "created_at": "..." }
Status: 201 Created
```

**Get All My Notes**
```
GET /api/v1/notes
Headers: Authorization: Bearer <token>
Response: [
  { "id": 1, "title": "Note 1", "owner_id": 1 },
  { "id": 2, "title": "Note 2", "owner_id": 1 }
]
Status: 200 OK
```

**Get Single Note**
```
GET /api/v1/notes/{id}
Headers: Authorization: Bearer <token>
Response: { "id": 1, "title": "My Note", "body": "...", "owner_id": 1 }
Status: 200 OK (if owned) | 404 Not Found (if not owned)
```

**Update Note**
```
PUT /api/v1/notes/{id}
Headers: Authorization: Bearer <token>
Body: { "title": "Updated Title", "body": "Updated content" }
Response: { "id": 1, "title": "Updated Title", ... }
Status: 200 OK
```

**Delete Note**
```
DELETE /api/v1/notes/{id}
Headers: Authorization: Bearer <token>
Status: 204 No Content
```

### Admin Endpoints

**View All Notes (Admin Only)**
```
GET /api/v1/admin/notes
Headers: Authorization: Bearer <admin_token>
Response: [
  { "id": 1, "title": "Note 1", "owner_id": 1, "owner": "Hiba" },
  { "id": 2, "title": "Note 2", "owner_id": 2, "owner": "Ali" }
]
Status: 200 OK (if admin) | 403 Forbidden (if not admin)
```

---

## 🔐 Security Features Explained

### 1. JWT Authentication
- Tokens expire after configured time (default: 30 minutes)
- Stateless: No server-side session storage needed
- Standard OAuth2 implementation

**Why JWT?**
- Scalable across multiple servers
- RESTful and stateless by design
- Industry standard for API authentication

### 2. Password Security
```
Plain Password → Hashing (bcrypt) → Database Storage
```
- Passwords never stored in plain text
- Bcrypt uses salt + iterations for collision resistance
- Even if database is compromised, passwords remain secure

### 3. SQL Injection Prevention
```
UNSAFE:  "SELECT * FROM users WHERE username = '" + username + "'"
SAFE:    ORM parameterized queries (SQLAlchemy)
```
- All queries use SQLAlchemy's parameterized approach
- User input never directly concatenated into SQL

### 4. Ownership-Based Access Control
Every note access checks: `Does this note belong to this user?`
```python
if note.owner_id != current_user.id:
    return 404  # Returns 404, not 403, to prevent resource enumeration
```

### 5. Role-Based Authorization
```
User Role: Can only access own notes
Admin Role: Can access all notes via /api/v1/admin endpoint
```

---

## 📚 Database Design

### Entity Relationship Diagram

```
┌──────────────┐
│    User      │
├──────────────┤
│ id (PK)      │
│ username     │
│ password     │
│ role         │
└──────┬───────┘
       │ 1
       │
       │ *
       │
┌──────▼───────┐          ┌──────────────┐
│     Note     │          │   Category   │
├──────────────┤          ├──────────────┤
│ id (PK)      │     *    │ id (PK)      │
│ title        ├──────────┤ name         │
│ body         │          │              │
│ owner_id (FK)│          └──────────────┘
│ category_id  │ 1
│ created_at   │
│ updated_at   │
└──────────────┘
```

### Database Models

**User Table**
- Stores application users
- Fields: id, username, hashed_password, role
- Role: 'user' or 'admin'

**Note Table**
- Stores user-created notes
- Fields: id, title, body, owner_id, category_id, created_at, updated_at
- owner_id: Foreign key to User table
- Ensures users can only see/edit their own notes

**Category Table**
- Stores note categories
- Fields: id, name
- One category can have multiple notes

---

## 🔧 Core Concepts Explained

### Why Alembic Migrations?

Problem without migrations:
```
Dev 1 changes database schema manually
Dev 2 doesn't know about the changes
→ Production deployment fails
```

Solution with Alembic:
```
Schema changes → Migration file (version controlled)
→ All developers apply same migrations
→ Production gets exact schema
```

**How it works:**
1. Modify SQLAlchemy model
2. Create migration: `alembic revision --autogenerate -m "Add field"`
3. Review generated migration file
4. Apply: `alembic upgrade head`
5. Track changes in Git

### Why SQLAlchemy ORM?

**Without ORM (Raw SQL):**
```python
# Tedious and error-prone
cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
result = cursor.fetchone()
```

**With ORM (SQLAlchemy):**
```python
# Clean and Pythonic
user = db.query(User).filter(User.id == user_id).first()
```

**Benefits:**
- Less boilerplate code
- Relationships handled automatically
- Database-agnostic (can switch PostgreSQL → MySQL easily)
- Built-in protection against SQL injection

### Why Routers?

**Without routers (monolithic):**
```
main.py
├── 100 lines of auth code
├── 100 lines of note CRUD code
├── 100 lines of category code
└── 100 lines of admin code
```
→ Hard to navigate, maintain, and test

**With routers (modular):**
```
routers/
├── auth.py (auth logic only)
├── notes.py (notes logic only)
├── categories.py (category logic only)
└── admin.py (admin logic only)
```
→ Clear separation, easier to test individually

---

## 📊 HTTP Status Codes Used

| Status | Meaning | Example |
|--------|---------|---------|
| 200 | OK | Successfully retrieved note |
| 201 | Created | Note created successfully |
| 204 | No Content | Note deleted successfully |
| 400 | Bad Request | Invalid input data |
| 401 | Unauthorized | Missing or invalid token |
| 403 | Forbidden | Admin endpoint, not admin user |
| 404 | Not Found | Note doesn't exist or not owned |
| 500 | Server Error | Unexpected error |

---

## 🔄 Authentication Flow

```
User Registration/Login
        ↓
Verify Credentials
        ↓
Hash Password (Bcrypt)
        ↓
Generate JWT Token
        ↓
Client Stores Token
        ↓
Client Sends: Authorization: Bearer <token>
        ↓
Server Verifies JWT
        ↓
Extract User ID from Token
        ↓
Process Request
        ↓
Return Response
```

---

## 🧪 Testing the API

### Using Swagger UI (Recommended)
1. Start the application
2. Open http://127.0.0.1:8000/docs
3. Click "Authorize" 
4. Login with test credentials
5. Try out endpoints directly from browser

### Using cURL
```bash
# Login
curl -X POST "http://127.0.0.1:8000/api/v1/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"username":"Hiba","password":"123456"}'

# Response:
# {"access_token":"eyJhbGc...","token_type":"bearer"}

# Create Note (use token from login)
curl -X POST "http://127.0.0.1:8000/api/v1/notes" \
  -H "Authorization: Bearer eyJhbGc..." \
  -H "Content-Type: application/json" \
  -d '{"title":"My Note","body":"Content here"}'
```

### Using Python Requests
```python
import requests

BASE_URL = "http://127.0.0.1:8000/api/v1"

# Login
response = requests.post(f"{BASE_URL}/auth/login", json={
    "username": "Hiba",
    "password": "123456"
})
token = response.json()["access_token"]

# Get notes
headers = {"Authorization": f"Bearer {token}"}
response = requests.get(f"{BASE_URL}/notes", headers=headers)
print(response.json())
```

---

## 📝 Environment Variables (.env)

```env
# Database Configuration
DATABASE_URL=postgresql://postgres:password@localhost:5432/notesdb

# JWT Configuration
SECRET_KEY=your-secret-key-here-min-32-chars
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# Server
DEBUG=True
```

**In Docker:**
```env
DATABASE_URL=postgresql://postgres:123456@db:5432/notesdb
```
Note: `db` is the PostgreSQL service name in Docker Compose

---

## 🚀 Development Workflow

### Feature Development
```
main branch
    ↓
feature/new-feature branch
    ↓
Develop & Test
    ↓
Merge to main
    ↓
Deploy
```

### Adding New Endpoints

1. **Add to models.py** (if needed)
   ```python
   class NewModel(Base):
       __tablename__ = "new_models"
       id = Column(Integer, primary_key=True)
       # ... fields
   ```

2. **Create migration**
   ```bash
   alembic revision --autogenerate -m "Add new_models table"
   alembic upgrade head
   ```

3. **Add to schemas.py**
   ```python
   class NewModelCreate(BaseModel):
       # fields
   ```

4. **Create router** (routers/new_feature.py)
   ```python
   @router.get("/new-feature")
   async def get_new_feature(current_user: User = Depends(...)):
       # Implementation
   ```

5. **Include router in main.py**
   ```python
   app.include_router(new_feature_router, prefix="/api/v1")
   ```

---

## 🐛 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| "Connection refused" | Ensure PostgreSQL is running, check DATABASE_URL |
| "401 Unauthorized" | Token missing or expired, login again |
| "403 Forbidden" | User doesn't have required role (admin only) |
| "404 Not Found" | Resource doesn't exist or isn't owned by user |
| "Module not found" | Run `pip install -r requirements.txt` |
| "Alembic errors" | Ensure PostgreSQL is running, check DATABASE_URL |

---


## 📄 Project Objectives Met

✅ Build a complete REST API using FastAPI  
✅ Implement user registration and login  
✅ Secure endpoints using JWT authentication  
✅ Role-based authorization for different user types  
✅ Ownership-based access control  
✅ Design relational database models  
✅ PostgreSQL integration with SQLAlchemy ORM  
✅ Database migrations with Alembic  
✅ SQL injection prevention  
✅ Docker containerization  
✅ Professional Git workflow  


**FastAPI Version:** Latest  
**Python Version:** 3.10+
