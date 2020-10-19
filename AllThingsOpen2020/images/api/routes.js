'use strict';

module.exports = (app) => {

    const imagesController = require('./images/imagesController');
    const cors = require('cors');

    app.use(cors());
    app.route('/api/space/images/:name')
        .get(imagesController.findImage)
        .post(function (req,res) {res.status(201).json('Location: /api/space/images/')})
        .put(function (req,res) {res.status(201).json('Location: /api/space/images/')})
        .delete(function (req,res) {res.json('Deleted')})
};