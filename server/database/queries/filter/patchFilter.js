const dbconnection = require('../../config/db_connection');

exports.patchFilter = (skills, offerType, memberId) => {
  const sql = {
    text: 'UPDATE filter SET skills = $1, offer_type = $2 WHERE member_id = $3 RETURNING *',
    values: [skills, offerType, memberId],
  };
  return dbconnection.query(sql);
};
