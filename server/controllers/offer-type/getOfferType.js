const { getOfferType } = require('../../database/queries/offer-type/getOfferType.js');

module.exports = (req, res, next) => {
  getOfferType()
    .then((result) => {
      res.send({
        error: null,
        data: result.rows,
      });
    }).catch(() => next({ code: 500, msg: 'internal server error' }));
};
