🔐 Secure Employee Manager

A full-stack Employee Management System with secure authentication using JWT.
Built with Node.js, Express, and Vanilla JavaScript.

This project demonstrates backend authentication, protected API routes, and CRUD operations with frontend integration.

---

🚀 Features

🔑 Admin Login with JWT Authentication
🔐 Protected Routes using Middleware
👨‍💼 Add Employees
🗑 Delete Employees
📄 Fetch Employee List
🔒 Password Hashing with bcrypt
🌐 Frontend–Backend Integration
📦 JSON-based File Storage

---

🛠 Tech Stack

Frontend

HTML5

Tailwind CSS

Vanilla JavaScript

Backend

Node.js

Express.js

JSON Web Token (JWT)

bcrypt.js

Data Storage

File-based JSON storage

---

📁 Project Structure

secure-employee-manager/
│
├── client/
│   ├── index.html
│   └── script.js
│
├── server/
│   ├── server.js
│   └── data/
│       ├── employees.json
│       └── users.json
│
├── .env
├── .gitignore
└── package.json

---

⚙️ Setup Instructions

1️⃣ Clone the Repository
git clone https://github.com/Pavithraaa27/PRODIGY_FSWD_02.git
2️⃣ Install Dependencies
cd server
npm install
3️⃣ Create .env File (in root folder)
JWT_SECRET=your_secret_key_here
4️⃣ Start Backend Server
node server.js
Server will run on:
http://localhost:3000
5️⃣ Open Frontend
Open:
client/index.html
in your browser.

---

🔐 Authentication Flow

Admin logs in with email and password
Server validates credentials
JWT token is generated
Token is required for all employee routes
Middleware verifies token before granting access

---

📌 Learning Outcomes

Implemented JWT authentication
Built RESTful API with Express
Protected routes using middleware
Integrated frontend with backend
Managed file-based data persistence

---

👩‍💻 Author

Pavithra Nair
