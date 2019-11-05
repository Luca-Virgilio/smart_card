// import for access database
const mongoose = require('mongoose');
const UserDB = mongoose.model('User');
// hash function
const crypto = require('crypto');


// version http without engine
const votingController = (req, res) => {
    console.log('body:');
    console.log(req.body.vote);

    res
        .status(201)
        .json({ msg: 'vote ' + req.body.vote });
};

// simulate event 
const eventController = async (req, res) => {
    console.log(req.body.name + ' try to access page...');
    //addUser(req.body.name);
    //getUser(req.body.name, res);
    const hash = crypto.createHash('sha256').update(req.body.name).digest('base64');
    try {
        const result = await UserDB.find({ name: hash });
        console.log(result);
        if (result.length > 0) {
            res.redirect('/question.html');
        } else {
            res.redirect('/login.html');
        }
    } catch (error) {

    }

}

// insert user into the database
const addUser = async (user) => {
    console.log('creation ...');
    const hash = crypto.createHash('sha256').update(user).digest('base64');
    try {
        const result = await UserDB.find({ name: hash });
    console.log(hash);
    // if the user isn't registered
    if (result.length == 0) {
        UserDB.create({
            name: hash
        }, (err, User) => {
            if (err) throw err;
        });
    }
    } catch (error) {
        
    }
};

const getUser = async (user, res) => {
    const query = { name: user };
    try {
        result = await UserDB.find(query);
        console.log(result);
        if (result.length > 0) {
            res.redirect('/question.html');
        } else {
            res.redirect('/login.html');
        }
    } catch (error) {
        console.log(error);
    }

};


module.exports = {
    votingController,
    eventController
}