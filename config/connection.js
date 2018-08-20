var mysql = require('mysql');
var connection;

// For Heroku Deployment vs. Local MySQL Database
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : 'Wubbs#2557',
    database : 'burgers_db'
  });
}


// Export the Connection
module.exports = connection;
