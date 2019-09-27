'use strict';

const express = require('express');
const router = express.Router();
const createError = require('http-errors');

const Trip = require('../models/Trip.js');
const User = require('../models/User.js');

const {
  validationFormPlace
} = require('../helpers/middlewaresTrips.js');

router.get('/em', async (req, res, next) => {
  try {
    const listOfTrips = await Trip.find();
    res.status(200).json({ listOfTrips });
  } catch (error) {
    next(error);
  }
});

router.get('/me', async (req, res, next) => {
  const userId = req.session.currentUser._id;
  try {
    const listOfMyTrips = await Trip.find({ owner: userId });
    res.status(200).json({ listOfMyTrips });
  } catch (error) {
    next(error);
  }
});

router.post('/trip/add', validationFormTrip(), async (req, res, next) => {
  const newTrip = req.body;
  newTrip.owner = req.session.currentUser._id;
  const listOfTrips = await Trip.find();
  try {
    listOfTrips.forEach(trip => {
      if (newTrip.title === trip.title && newTrip.owner === trip.owner) {
        return next(createError(428));
      }
    });
    const createdTrip = await Trip.create(newTrip);
    res.status(200).json(createdTrip);
    await User.findByIdAndUpdate(newTrip.owner, { $push: { myTrips: createdTrip._id } });
  } catch (error) {
    next(error);
  }
});

router.put('/trip/edit/:id', async (req, res, next) => {
  const { id } = req.params
  const tripUpdated = req.body

  try {
    const updated = await Trip.findByIdAndUpdate(id, tripUpdated, { new: true })
    res.status(200).json(updated)
  } catch (error) {
    next(error)
  }
})

router.delete('/trip/delete/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    await Trip.findByIdAndDelete(id);
    res.status(200).json({ message: 'trip deleted' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;