const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // XAMPP mein usually blank hota hai
  database: 'coffee_shop_db'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.log('MySQL connection failed: ' + err.message);
    return;
  }
  console.log('✅ Connected to MySQL database');
  
  // Check data
  db.query('SELECT COUNT(*) as count FROM menu_items', (err, results) => {
    if (err) {
      console.log('Error checking data:', err);
      return;
    }
    console.log(`📊 Total menu items in database: ${results[0].count}`);
  });
});

// Routes

// GET /menu - Get all menu items
app.get('/menu', (req, res) => {
  const query = 'SELECT * FROM menu_items ORDER BY name';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching menu:', err);
      return res.status(500).json({ message: 'Database error' });
    }
    console.log(`📨 Sent ${results.length} menu items to frontend`);
    res.json(results);
  });
});

// GET /menu/random - Get one random item where inStock = true
app.get('/menu/random', (req, res) => {
  const query = 'SELECT * FROM menu_items WHERE inStock = true ORDER BY RAND() LIMIT 1';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching random item:', err);
      return res.status(500).json({ message: 'Database error' });
    }
    
    if (results.length === 0) {
      return res.status(404).json({ message: 'No items in stock' });
    }
    
    console.log(`🎲 Random item sent: ${results[0].name}`);
    res.json(results[0]);
  });
});

// Start server
app.listen(PORT, () => {
  console.log('🚀 Coffee shop server running on port 3000');
  console.log('📍 Endpoints available:');
  console.log('   GET http://localhost:3000/menu - All menu items');
  console.log('   GET http://localhost:3000/menu/random - Random in-stock item');
});