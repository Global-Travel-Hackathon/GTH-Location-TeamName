'use strict';

const createError = require('http-errors');

exports.validationFormTrip = () => (req, res, next) => {
  const place = req.body;
  if (!trip.title) {
    return next(
      createError(421)
    );
  } else if (!trip.destination) {
    return next(
      createError(422)
    );
  } else if (!trip.description) {
    return next(
      createError(423)
    );
  } else if (!trip.startDate) {
    return next(
      createError(424)
    );
  } else if (!trip.endDate) {
    return next(
      createError(425)
    );
  } else {
    next();
  }
};