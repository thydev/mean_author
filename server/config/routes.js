const mongoose = require('mongoose'),
        Author = mongoose.model('Author'),
        authors = require('../controllers/authors');

module.exports = (app) => {

    app.get('/authors', (req, res) => {
        authors.retrieveAll(req, res);
    })

    app.get('/authors/:id', (req, res) => {
        authors.retrieveById(req, res);
    });

    app.post('/authors', (req, res) => {
        authors.create(req, res);
    });

    app.put('/authors/:id', (req, res) => {
        authors.updateById(req, res);
    });

    app.delete('/authors/:id', (req, res)=> {
        authors.removeById(req, res);
    });

}