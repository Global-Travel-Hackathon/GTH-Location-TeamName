'use strict';

const createError = require('http-errors');

exports.isLoggedIn = () => (req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    next(createError(401));
  }
};

exports.isNotLoggedIn = () => (req, res, next) => {
  if (!req.session.currentUser) {
    next();
  } else {
    next(createError(403));
  }
};

exports.validationLoggin = () => (req, res, next) => {
  const { email, password } = req.body;

<<<<<<< HEAD
  if (!email || !password) {
=======
  if (!email || !password) {       
>>>>>>> 0a4e9fec8d5e07d6310a0c9b8f8b40fc4e29f60d
    next(createError(422));
  } else {
    next();
  }
};
