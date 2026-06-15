# Baby Steps: To-Do List App

A modern, full-stack To-Do list application featuring a React frontend and a Python Flask backend.

## Tech Stack
*   **Frontend:** React (powered by Vite)
*   **Backend:** Python with Flask
*   **Communication:** `fetch` API and `flask-cors`

## Project Structure
*   `/frontend` - Contains the React application
*   `/backend` - Contains the Flask server and API logic

## How to Run the Project

You will need two separate terminal windows running simultaneously to start this application.

### 1. Start the Backend (Flask)
Open a terminal, navigate to the `backend` folder, and run:
```bash
cd backend
pip install flask flask-cors
python app.py
```
*The backend will run on `http://localhost:5000`*

### 2. Start the Frontend (React)
Open a second terminal, navigate to the `frontend` folder, and run:
```bash
cd frontend
npm install
npm run dev
```
*The frontend will typically run on `http://localhost:5173`. Open this URL in your browser.*

## Features
*   Create new lists (Frontend UI connected to Backend API)
*   *(More features coming soon!)*
