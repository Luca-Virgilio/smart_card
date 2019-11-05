const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

// compile module
mongoose.model('User', userSchema);