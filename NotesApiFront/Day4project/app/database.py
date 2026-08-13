"""
Database configuration for the Notes API.

This module is responsible for:
1. Loading environment variables from the .env file.
2. Reading the PostgreSQL database URL.
3. Creating the SQLAlchemy engine.
4. Creating database sessions.
5. Providing the Base class for ORM models.
"""

import os

from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker


# ==========================================================
# Load Environment Variables
# ==========================================================

# Load variables from the .env file.
load_dotenv()


# ==========================================================
# Database Configuration
# ==========================================================

# Read the PostgreSQL connection URL from .env.
DATABASE_URL = os.getenv("DATABASE_URL")


# Make sure DATABASE_URL exists.
if not DATABASE_URL:
    raise ValueError(
        "DATABASE_URL is not set. "
        "Please add DATABASE_URL to your .env file."
    )


# ==========================================================
# SQLAlchemy Engine
# ==========================================================

# Create the SQLAlchemy engine.
engine = create_engine(
    DATABASE_URL
)


# ==========================================================
# Database Session
# ==========================================================

# SessionLocal creates a new database session
# whenever the application needs to communicate
# with the database.
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine,
)


# ==========================================================
# SQLAlchemy Base
# ==========================================================

# All ORM models inherit from this Base class.
Base = declarative_base()