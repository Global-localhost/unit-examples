'use strict';

const eventsService = require('./eventsService');

exports.findEvent = async (req, res) => {
  await res.json(eventsService.findById(req.params.id));
};

exports.getAll = async (req, res) => {
  await res.json(eventsService.getAll());
};