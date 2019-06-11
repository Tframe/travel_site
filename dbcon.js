var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_stanekg',
  password        : 'KohU!kLF7i',
  database        : 'cs340_stanekg',
  dateStrings 	  : 'date'
});
module.exports.pool = pool;
