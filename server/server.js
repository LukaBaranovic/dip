const express = require("express");
const { getCategories } = require("./categoryController"); // Import the category controller
const db = require("./dbConfig"); // Import the database configuration
const app = express();

// Check database connection
db.getConnection((err, connection) => {
  if (err) {
    console.error("Failed to connect to the database:", err);
  } else {
    console.log("Successfully connected to the database");
    connection.release(); // Release the connection back to the pool
  }
});

app.get("/api/categories", getCategories);

app.listen(4500, () => console.log("Server running on port 4500"));
