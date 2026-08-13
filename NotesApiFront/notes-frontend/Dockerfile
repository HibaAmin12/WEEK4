# Use Node.js
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the frontend source code
COPY . .

# Vite development server port
EXPOSE 5173

# Start Vite and make it accessible outside the container
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]