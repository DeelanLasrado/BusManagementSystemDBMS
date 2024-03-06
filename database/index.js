const mysql = require('mysql2');


const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: "********",
  database: 'mini'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Check the connection status
if (db.state === 'connected') {
  console.log('The database is connected.');
} else {
  console.log('The database is not connected.');
}


setInterval(function () {
  db.query('SELECT 1');
  console.log("Database alive" );
}, 5000);
// Assuming req.query.name is defined in a broader scope or passed as an argument

// Assuming req.query.name is defined in a broader scope or passed as an argument





module.exports = db;
