const mongoose = require('mongoose'),
        Author = mongoose.model('Author');

module.exports = {

    retrieveAll : (req, res) => {
        Author.find({}, (err, items) => {
            if (!err) {
                res.json({message: "Success", data: items});
            } else {
                console.log(err);
                res.json({message: "Error", error: err})
            }
        });
    },

    retrieveById: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId; 
        Author.find({_id: new ObjectId(req.params.id)})
            .exec((err, item)=>{
                if (!err) {
                    res.json({message: "Success", data: item});
                } else {
                    console.log(err);
                    res.json({message: "Error", error: err})
                }
            });
    },
    
    create: (req, res) => {
        let item = new Author();
        item._id = new mongoose.Types.ObjectId();
        item.name = req.body.name;
        item.save( err => {
            if (!err) {
                res.json({message: "Success", data: item})
            } else {
                console.log(item.errors);
                res.json({message: "Error", error: err})
            }
        });
    }, 

    updateById: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId; 
        // Author.where({_id: new ObjectId(req.params.id)})
        //     .update({$set: {
        //         name: req.body.name,
        //     }})
        //     .exec((err, item)=>{
        //         if (!err) {
        //             res.json({message: "Success", data: item});
        //         } else {
        //             console.log(err);
        //             res.json( {message: "Error", error: err})
        //         }
        //     });
        const update = { name: req.body.name };
        const opts = { runValidators: true };
        Author.update({_id: new ObjectId(req.params.id)}, update, opts, function(err, item) {
            if (!err) {
                res.json({message: "Success", data: item});
            } else {
                console.log(err);
                res.json({message: "Error", error: err})
            }
        });
    },

    removeById: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId; 
        Author.remove({_id: new ObjectId(req.params.id)})
            .exec((err, item)=>{
                if (!err) {
                    res.json({message: "Success", data: item});
                } else {
                    console.log(err);
                    res.json({message: "Error", error: err})
                }
            });
    },

    createQuote: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId; 
        Author.findOne({_id: new ObjectId(req.params.id)})
            .exec((err, item)=>{
                if (!err) {
                    item.quotes.push({ content: req.body.content });
                    item.save((err2, item2) => {
                        if (err2) {
                            res.json({message: 'Error', error: err2});
                        } else {
                            res.json({message: "Success", data: item2});
                        }
                    });
                } else {
                    res.json({message: "Error", error: err})
                }
            });
    },

    voteQuote: (req, res) => {
        console.log(req.body);
        const ObjectId = mongoose.Types.ObjectId; 
        Author.findOne({_id: new ObjectId(req.params.id)})
            .exec((err, item)=>{
                if (!err) {
                    let q = item.quotes.id(req.body.quote_id);
                    q.vote = parseInt(q.vote) + parseInt(req.body.vote);
                    item.save((err2, item2) => {
                        if (err2) {
                            res.json({ message: 'Error2', error: err2});
                        } else {
                            res.json({message: "Success", data: item2});
                        }
                    });
                } else {
                    res.json( {message: "Error1", error: err})
                }
            });

        // Author.findOneAndUpdate(
        //     { "_id": req.params.id, "quotes._id": req.body.quote_id },
        //     { 
        //         "$set": {
        //             "quotes.$.vote": req.body.vote
        //         }
        //     },
        //     function(err,doc) {
        
        //     }
        // );

    },

    deleteQuote: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId; 
        Author.findOne({_id: new ObjectId(req.params.id)})
            .exec((err, item)=>{
                if (!err) {
                    item.quotes.id(req.params.quote_id).remove();
                    item.save((err2, item2) => {
                        if (err2) {
                            res.json({ message: 'Error', error: err2});
                        } else {
                            res.json({message: "Success", data: item2});
                        }
                    });
                } else {
                    res.json( {message: "Error", error: err})
                }
            });
    }

}