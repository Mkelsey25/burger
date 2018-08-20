
var connection = require('./connection.js');

// connect to database
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});




//Create ORM object and run queries
var orm = {

  selectAll: function(cb) {
    connection.query('SELECT * FROM burgers', function (err, res) {
      if (err) throw err;
      cb(res);
    });

  },

  insertOne: function(burger_name, cb){
    connection.query('INSERT INTO burgers SET ?', {
      burger_name: burger_name,
      devoured: false,
    }, function (err, res) {
      if (err) throw err;
      cb(res);
    });

  },

 
  updateOne: function(burgerID, cb){
    
    connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function (err, result) {
        if (err) throw err;
        cb(result);
      });

  }

};


module.exports = orm;
  