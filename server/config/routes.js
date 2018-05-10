const mongoose = require('mongoose'),
        Author = mongoose.model('Author'),
        authors = require('../controllers/authors'),
        path = require('path');

module.exports = (app) => {
    const baseUrl = '/authors/';
    app.get(baseUrl, (req, res) => {
        authors.retrieveAll(req, res);
    })

    app.get(baseUrl + ':id', (req, res) => {
        authors.retrieveById(req, res);
    });

    app.post(baseUrl, (req, res) => {
        authors.create(req, res);
    });

    app.put(baseUrl + ':id', (req, res) => {
        authors.updateById(req, res);
    });

    app.delete(baseUrl + ':id', (req, res)=> {
        authors.removeById(req, res);
    });

    app.post(baseUrl + 'quotes/:id', (req, res) => {
        authors.createQuote(req, res);
    });

    app.post(baseUrl + 'quotes/vote/:id', (req, res) => {
        authors.voteQuote(req, res);
    });
    // this route will be triggered if any of the routes above did not match
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./ngauthor/dist/ngauthor/index.html"))
    });
}