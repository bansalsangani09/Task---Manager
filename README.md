# 📝 Task Manager App (MERN)

## 📌 Overview

A simple full-stack Task Manager application that allows users to create, view, update, and delete tasks.
The project is built using the MERN stack and focuses on clean structure, API integration, and basic validation.

---

## 🚀 Features

* Add new tasks
* View all tasks
* Mark tasks as completed
* Delete tasks
* Filter tasks (All / Active / Completed)
* Edit task title

---

## 🛠 Tech Stack

* Frontend: React
* Backend: Node.js + Express
* Database: MongoDB
* API: RESTful services
* Containerization: Docker & Docker Compose

---

## 📁 Project Structure

```
task-manager/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   └── api.js
│   └── App.js
│
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Setup Instructions

### 🔹 Run Without Docker

#### Backend

```
cd backend
npm install
npm start
```

#### Frontend

```
cd frontend
npm install
npm start
```

---

### 🔹 Run With Docker

```
docker-compose up --build
```

---

## 🌐 Application URLs

* Frontend: http://localhost:3000
* Backend API: http://localhost:5000/tasks

---

## 📡 API Endpoints

| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| GET    | /tasks     | Get all tasks     |
| POST   | /tasks     | Create a new task |
| PATCH  | /tasks/:id | Update task       |
| DELETE | /tasks/:id | Delete task       |

---

## 📦 Task Data Model

```
{
  id: String,
  title: String,
  completed: Boolean,
  createdAt: Date
}
```

---

## ⚖️ Assumptions & Trade-offs

* Minimal UI to focus on functionality
* Basic validation implemented
* No authentication included
* Focused on clean code and structure

---

## 💡 Improvements (Future Scope)

* User authentication
* Pagination
* Better UI/UX
* Unit testing
* Deployment setup

---

## 🧠 Key Highlights

* Clean separation of frontend and backend
* RESTful API design
* Proper error handling and validation
* Dockerized for easy setup and scalability

---

## 👨‍💻 Author

Developed as part of a full-stack assignment to demonstrate practical MERN skills.
