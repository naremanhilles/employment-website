const dbconnection = require('../../config/db_connection');

const checkUsername = (username) => {
  console.log(username, 744444444444444);
  const sql = {
    text: 'SELECT * FROM member WHERE username = $1',
    values: [username],
  };
  return dbconnection.query(sql);
};

module.exports = { checkUsername };
