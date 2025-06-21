# ✅ To-Do App Frontend

This is the **frontend** for a simple and interactive To-Do List application built using **React + Vite**. It allows users to add, update, and delete tasks by communicating with a RESTful backend API.

---

## 🌐 Live Demo

https://to-do-app-frontend-mood.onrender.com/

---

## 🚀 Features

- Add, update, and delete tasks
- Mark tasks as completed
- Responsive and user-friendly interface
- Communicates with a Flask backend API
- Toast notifications for task actions

---

## 🛠️ Tech Stack

- **Frontend**: React (with Vite)
- **Styling**: CSS3
- **Notifications**: react-toastify
- **HTTP Requests**: Fetch API
- **Deployment**: Render

---

## 📁 Project Structure
to_do_app_frontend\
├── public\
├── src\
│ ├── components\
│ │ ├── TaskForm.jsx\
│ │ ├── TaskList.jsx\
│ │ └── TaskManager.jsx\
│ ├── App.jsx\
│ ├── main.jsx\
│ └── styles\
│ └── TaskManager.css\
├── .gitignore\
├── index.html\
├── package.json\
├── vite.config.js\
└── README.md

---

## 🔌 API Integration
- GET /tasks → Fetch all tasks
- POST /tasks → Add a task
- PATCH /tasks/:id → Update task status
- DELETE /tasks/:id → Remove task

---
## 🚀 Deployment (Vite + Render)
1.Build the project
```bash
npm run build
```
2.Deploy the dist folder to Render
  - In Render:
  - Select “Static Site”
  - Set:
    - Build Command: npm run build
    - Publish directory: dist



