'use strict';

const imagesService = require('./imagesService');

exports.findImage = async (req, res) => {
  await res.status(200).send(req.params.name).type("png");
};

exports.getAll = async (req, res) => {
  await res.json(imagesService.getAll());
};