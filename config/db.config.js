const mysql = require('mysql')

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'node_mysql_crud_db'
})

conn.connect((err) => {
  if(err) {
    console.error('error connecting: ' + err)
    throw err;
  }
  console.log('Database connected')
});

module.exports = conn

