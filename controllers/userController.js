var User= require('../models/user');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

exports.create_user = function (req, res) {
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword


    });


    user.save(function (err) {
        if (err) {
            return res.status(500).json("There was a problem registering the user.")
        } else {
            // create a token
            var token = jwt.sign({ id: user._id }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token });
        }
    });
};
