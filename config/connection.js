var mysql = require('mysql');
var connection;


if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : process.env.password,
    database : 'burgers_db'
  });
}


// Export the Connection
module.exports = connection;
