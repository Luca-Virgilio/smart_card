// import for access database
const mongoose = require('mongoose');
const UserDB = mongoose.model('User');

// only for emitter
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();


// version http without engine
const votingController = (req, res) => {
    console.log('body:');
    console.log(req.body.vote);

    res
        .status(201)
        .json({ msg: 'vote '+req.body.vote});
};

// simulate event emitter 
const eventController = (req, res) =>{
    console.log(req.body.name + ' try to access page...');
    //myEmitter.emit(req.body.name);
    addUser(req.body.name);
    
    res
        .json('user created');
}

// insert user into the database
const addUser = (user) =>{
    console.log('creation ...');
    UserDB.create({
        name: user
    }, (err, User)=>{
        if (err) throw err;
    });
};

module.exports = {
    votingController,
    eventController
}