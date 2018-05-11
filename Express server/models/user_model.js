const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const USER = module.exports = mongoose.model("USER", userSchema);

module.exports.getUserByUsername = function (userName, callback) {
    query = {
        username: userName
    }
    USER.findOne(query, callback);
};

module.exports.remove = function (user, callback) {
    USER.findByIdAndRemove(user.id, callback);
};

module.exports.updatePassword = function (user, callback) {
    query = {
        password:user.password
    }
    USER.findByIdAndUpdate(user.id, query, callback);
};
module.exports.getAllUsers = function (callback) {
    USER.find(callback);
};

module.exports.AddUser = function (user, callback) {
    USER.create(user, callback);
};


module.exports