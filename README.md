# MidTerm\_MobileApplicationDevelopment

☕ Coffee Shop Management System
A full-stack mobile application built with React Native (Expo) frontend, Node.js backend, and SQL database for managing coffee shop menu items.

📋 Project Overview
This project was developed as part of the Mobile Application Development Mid-Term Examination for Abasyn University. It demonstrates a complete full-stack mobile application where customers can view coffee shop menu items stored in a database and get either the full menu or random surprise items.

🎯 Exam Requirements Fulfilled
Question 2: Full-Stack Coffee Shop Management System
✅ MySQL Database Setup with menu\_items collection

✅ Node.js Express Server with MongoDB connectivity

✅ RESTful APIs for menu operations

✅ CORS mitigation enabled

✅ Error handling and proper JSON responses

Question 3: Expo React Native Frontend
✅ Two-button interface (Full Menu \& Surprise Me)

✅ Backend integration for data fetching

✅ Mobile-responsive design with Flexbox

✅ Real-time menu display

🛠️ Technology Stack
Frontend
React Native with Expo

Axios for API calls

Flexbox for responsive layout

Expo Go for mobile testing

Backend
Node.js runtime environment

Express.js web framework

SQL Database (SQLite/MySQL)

CORS middleware

Database
SQLite (Development) / MySQL (Production)

6 Sample Menu Items with categories and pricing

📁 Project Structure
text
coffee-shop-app/
├── backend/
│   ├── server.js          # Express server with routes
│   ├── package.json       # Backend dependencies
│   └── coffee\_shop.db     # SQLite database file
├── frontend/
│   ├── App.js             # Main React Native component
│   ├── package.json       # Frontend dependencies
│   └── app.json           # Expo configuration
├── README.md              # Project documentation
└── demo-video.mp4         # Application demonstration
🚀 Installation \& Setup
Prerequisites
Node.js (v14 or higher)

npm or yarn

Expo Go app on mobile device

SQL database (SQLite/MySQL)

Backend Setup
Navigate to backend directory

bash
cd backend
Install dependencies

bash
npm install
Start the server

bash
npm run dev
Expected Output:

text
✅ Connected to SQLite database
✅ Menu items table ready
📝 Inserting sample data...
🚀 Coffee shop server running on port 3000
Frontend Setup
Navigate to frontend directory

bash
cd frontend
Install dependencies

bash
npm install
Start Expo development server

bash
npx expo start
Test on mobile

Scan QR code with Expo Go app

Or press 'a' for Android emulator

Or press 'w' for web browser

📊 Database Schema
Menu Items Table
sql
CREATE TABLE menu\_items (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,
category TEXT NOT NULL,
price REAL NOT NULL,
inStock BOOLEAN DEFAULT TRUE,
created\_at DATETIME DEFAULT CURRENT\_TIMESTAMP
);
Sample Data
Name	Category	Price	Stock
Espresso	Hot Drinks	800.50	✅
Cappuccino	Hot Drinks	500.00	✅
Iced Coffee	Cold Drinks	800.00	✅
Latte	Hot Drinks	900.00	✅
Croissant	Pastries	700.50	✅
Muffin	Pastries	400.00	❌
🌐 API Endpoints
GET /menu
Description: Fetch all menu items from database

Response: Array of menu item objects

Example: http://localhost:3000/menu

GET /menu/random
Description: Get one random in-stock menu item

Response: Single menu item object

Example: http://localhost:3000/menu/random

📱 Features

1. Full Menu Display
   Shows all available menu items

Displays name, category, price, and stock status

Organized in a scrollable list

2. Surprise Me Feature
   Randomly selects one in-stock item

Perfect for indecisive customers

Only shows available items

3. Responsive Design
   Mobile-first approach

Flexbox layout for different screen sizes

Touch-friendly buttons

4. Real-time Updates
   Live data fetching from backend

Loading indicators during API calls

Error handling with user feedback

🔧 Configuration
Backend Configuration
Port: 3000

CORS: Enabled for all origins

Database: Auto-creates if not exists

Sample Data: Auto-inserts on first run

Frontend Configuration
API URL: http://localhost:3000 (Update to your IP for mobile testing)

Platform: iOS, Android, Web

Dependencies: React Native, Expo, Axios

📝 Answer to Question 1
a. Purpose of Expo with React Native
Expo simplifies React Native development by providing:

Pre-built components and APIs

Hot reloading for faster development

Easy testing with Expo Go app

No native build setup required

Commands used:

npx create-expo-app - Create new project

npx expo start - Start development server

npx expo install - Install compatible packages

b. Meaning of Async
Async enables non-blocking operations in JavaScript:

Used for time-consuming tasks (API calls, database operations)

Works with await keyword for synchronous-like code

Prevents UI freezing during data fetching

c. Components in React Native
Purpose: Reusable UI elements for building interfaces

Android Components Available:

View - Container component

Text - Display text content

TextInput - User input field

TouchableOpacity - Pressable button

FlatList - Efficient list rendering

ActivityIndicator - Loading spinner

d. Purpose of Flexbox
Flexbox provides responsive layout management:

Dynamic arrangement of UI elements

Consistent spacing across screen sizes

Easy alignment and distribution

Mobile-optimized layouts

e. Node.js vs Express.js
Node.js: JavaScript runtime environment for server-side execution

Express.js: Web application framework built on Node.js for building APIs and web applications

🎥 Demonstration
The application includes:

Backend server running on port 3000

Frontend mobile app with Expo

Database operations with sample data

API integration between frontend and backend

Mobile-responsive user interface

🤝 Contributing
Fork the repository

Create feature branch (git checkout -b feature/AmazingFeature)

Commit changes (git commit -m 'Add some AmazingFeature')

Push to branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is developed for educational purposes as part of Abasyn University's Mobile Application Development course.

👨‍💻 Developer
Shahid Umer
Reg No # 6732

Abasyn University, Islamabad Campus

Mobile Application Development - Fall 2025

Course Code: C5375

⭐ If you found this project helpful, please give it a star on GitHub!

