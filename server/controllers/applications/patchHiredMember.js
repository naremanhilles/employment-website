const yup = require('yup');
const { patchHiredMember } = require('../../database/queries/applications/index');
const updateOfferStatus = require('../../database/queries/offers/updateOfferStatus');

module.exports = (req, res, next) => {
  const { offer_id: offerId, status } = req.body;
  const { memberId } = req.params;
  const schema = yup.object({
    offerId: yup.number().required(),
    memberId: yup.string().required(),
    status: yup.string().required(),
  });
  schema
    .validate({ offerId, memberId, status })
    .then(() => {
      patchHiredMember(memberId, offerId, status)
        .then((result) => {
          if (result.rowCount && result.rows[0].status === 'accepted') {
            // update offer status if Hired_member status = accepted
            updateOfferStatus(offerId, 'completed')
              .then(() => res.send({
                error: null,
                data: result.rows,
              }))
              .catch(err => next({ code: 500, msg: err.message }));
          } else if (result.rowCount) {
            res.send({
              error: null,
              data: result.rows,
            });
          } else {
            next({ code: 400, msg: 'Bad Request!' });
          }
        })
        .catch(err => next({ code: 500, msg: err.message }));
    })
    .catch((err) => {
      next({ code: 400, msg: err.message });
    });
};
