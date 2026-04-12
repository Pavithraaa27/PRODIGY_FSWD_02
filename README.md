# 🔐 Secure Employee Manager  

A full-stack Employee Management System with secure authentication using JWT.   
Built using **Node.js, Express, and Vanilla JavaScript**.

This project demonstrates backend authentication, protected API routes, and CRUD operations with seamless frontend–backend integration.

---

## 🚀 Features

- 🔑 Admin login with JWT authentication
- 🔐 Protected routes using middleware  
- 👨‍💼 Add new employees  
- 🗑 Delete employees  
- 📄 Retrieve employee list  
- 🔒 Secure password hashing with bcrypt  
- 🌐 Frontend–backend integration  
- 📦 File-based JSON data storage  

---

## 🛠 Tech Stack

### Frontend
- HTML5  
- Tailwind CSS  
- Vanilla JavaScript  

### Backend
- Node.js  
- Express.js  
- JSON Web Token (JWT)  
- bcrypt.js  

### Data Storage
- File-based JSON storage  

---

## 📁 Project Structure

```
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
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Pavithraaa27/secure-employee-manager.git
```

### 2️⃣ Install Dependencies

```bash
cd server
npm install
```

### 3️⃣ Create a `.env` File (in the root folder)

```
JWT_SECRET=your_secret_key_here
```

### 4️⃣ Start the Backend Server

```bash
node server.js
```

The server will run at:

```
http://localhost:3000
```

### 5️⃣ Open the Frontend

Open:

```
client/index.html
```

in your browser.

---

## 🔐 Authentication Flow

1. Admin logs in using email and password  
2. Server validates credentials  
3. JWT token is generated upon successful login  
4. Token is required to access employee routes  
5. Middleware verifies the token before granting access  

---

## 📌 Learning Outcomes

- Implemented JWT-based authentication  
- Built RESTful APIs using Express  
- Secured routes using middleware  
- Integrated frontend with backend APIs  
- Managed file-based data persistence  

---

## 👩‍💻 Author  

**Pavithra Nair**  
B.Tech Student | Aspiring Full Stack Developer  
