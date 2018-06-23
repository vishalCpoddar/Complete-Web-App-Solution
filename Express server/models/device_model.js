
const mongoose = require('mongoose');

const DeviceSchema = {
    name: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    fields: {
        type: Array,
        default: []
    },
    controls: {
        type: Array,
        default: []
    }
}

const DEVICE = module.exports = mongoose.model('DEVICE', DeviceSchema);

module.exports.findDeviceByDevId = function (dev, callback) {
    DEVICE.findById(dev.id, callback)
};


module.exports.findDeviceByUserId = function (user, callback) {
    query = {
        userID: user.id
    }
    DEVICE.findOne(query, callback)
};

module.exports.updateDevice = function (device, callback) {
    query = {
        _id: device._id,
        controls: device.controls,
        fields: device.fields
    }
    DEVICE.findByIdAndUpdate(query._id, query, callback);
};


module.exports.removeDevice = function (device, callback) {
    DEVICE.findByIdAndRemove(device.id, callback);
};

module.exports.getAllDevice=function(callback){
    DEVICE.find(callback);
};

module.exports.addDevice=function(device,callback){
    DEVICE.create(device,callback);
};


module.exports
