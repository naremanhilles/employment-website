const updateOfferStatus = require('../../database/queries/offers/updateOfferStatus');

module.exports = (req, res, next) => {
  const { offerId } = req.params;
  const { status } = req.body;
  updateOfferStatus(offerId, status)
    .then(result => res.send({
      error: null,
      data: result.rows,
    }))
    .catch(() => next({ code: 500, msg: 'internal server error' }));
};
