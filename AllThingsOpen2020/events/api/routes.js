'use strict';

module.exports = (app) => {

    const eventsController = require('./events/eventsController');
    const cors = require('cors');

    app.use(cors());
    app.route('/api/space/events/').get( eventsController.getAll);
    app.route('/api/space/events/:id')
        .get(eventsController.findEvent)
        .post(function (req,res) {res.status(201).json('Location: /api/space/events/')})
        .put(function (req,res) {res.status(201).json('Location: /api/space/events/')})
        .delete(function (req,res) {res.json('Deleted')})
};