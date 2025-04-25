# Express Users API

An Express.js server that fetches user data from an external API. Supports searching by username using query parameters.

---

## 🚀 Features

- Express server with configurable port
- GET route `/users`:
  - Returns all users if no query is passed
  - Returns a specific user if `username` query is provided (case-insensitive)
- External API used: (https://jsonplaceholder.typicode.com/users)
- Error handling for 404 (user not found) and server errors

---

## 📦 Installation

1. Clone the repository:
 
   git clone https://github.com/Mohan2345/Server_Task
   cd express-users-api

2. Install Dependencies
   npm install


3. Create a .env file and add your desired port (optional):
   port = 4000

4. Run The Server
   node index.js

5. You Will See In Terminal
   Server Is Running On Port 4000

6. Now Test The API in Browser/Postman







