const express = require('express');
const router = express.Router();
const DEVICE = require('../models/device_model');
const USER = require('../models/user_model')

router.get('/', (err, req, res) => {
    DEVICE.getAllDevices(err, devices)
    if (err) {
        res.json({
            success: false,
            msg: err
        });
    }
    else {
        res.json({
            success: true,
            msg: devices
        })
    }
});

router.post('/', (req, res) => {
    if (!req.body.username || !req.body.name || !req.body.fields || !req.body.controls) {
        res.json({
            success: false,
            msg: 'Insufficient data!'
        });
    }
    else {
        USER.getUserByUsername(req.body.username, (err, resUser) => {
            if (err) {
                res.json({
                    success: false,
                    msg: err
                });
            }
            else {
                if (!resUser) {
                    res.json({
                        success: false,
                        msg: 'User not found!'
                    });
                }
                else {
                    toSend = {
                        name: req.body.name,
                        userID: resUser._id,
                        fields: req.body.fields,
                        controls: req.body.controls
                    }

                    DEVICE.addDevice(toSend, (err, req, res) => {
                        if (err) {
                            res.json({
                                success: false,
                                msg: err
                            });
                        }
                        else {
                            res.json({
                                success: true,
                                msg: 'Device successfully Addded.!'
                            });
                        }
                    })
                }
            }
        })
    }
});

router.put('/', (req, res) => {
    if (!req.body.name || !req.body.fields || !req.body.controls || !req.body.id) {
        res.json({
            success: false,
            msg: 'Insufficient data!'
        });
    }
    else {
        DEVICE.getDeviceByDevId(req.body, (err, resUser) => {
            if (err) {
                res.json({
                    success: false,
                    msg: err
                });
            }
            else {
                if (!resDev) {
                    res.json({
                        success: false,
                        msg: 'Device not found!'
                    });
                }
                else {
                    toSend = {
                        name: req.body.name,
                        userID: resDev._id,
                        fields: req.body.fields,
                        controls: req.body.controls
                    }

                    DEVICE.updateDevice(toSend, (err, res) => {
                        if (err) {
                            res.json({
                                success: false,
                                msg: err
                            });
                        }
                        else {
                            res.json({
                                success: true,
                                msg: 'Device successfully Updated.!'
                            });
                        }
                    })
                }
            }
        })
    }
});


router.delete('/', (req, res) => {
    if (!req.body.name || !req.body.id || !req.body.username || !req.body.password) {
        res.json({
            success: false,
            msg: 'Insufficient data!'
        });
    }
    else {
        DEVICE.getDeviceByDevId(req.body, (err, resDev) => {
            if (err) {
                res.json({
                    success: false,
                    msg: err
                });
            }
            else {
                if (!resDev) {
                    res.json({
                        success: false,
                        msg: 'Device not found!'
                    });
                }
                else {
                    USER.getUserByUsername(req.body.username, (err, resUser) => {
                        if (req.body.password != resUser.password) {
                            res.json({
                                success: false,
                                msg: 'Incorrect Password!'
                            });
                        }
                        else {

                            DEVICE.removeDevice(resDev._id, (err, res) => {
                                if (err) {
                                    res.json({
                                        success: false,
                                        msg: err
                                    });
                                }
                                else {
                                    res.json({
                                        success: true,
                                        msg: 'Device successfully deleted.!'
                                    });
                                }
                            });
                        }
                    });
                }
            }

        });
    }
});

router.post('/getDeviceByUserId', (req, res) => {
    if (!req.body.id) {
        res.json({
            success: false,
            msg: 'Insufficient data!'
        });
    }
    else {
        DEVICE.findDeviceByUserId(req.body, (err, resDev) => {
            if (err) {
                res.json({
                    success: false,
                    msg: err
                });
            }
            else {
                if (!resDev) {
                    res.json({
                        success: false,
                        msg: 'No Device found!'
                    });
                }
                else {
                    res.json({
                        success: true,
                        msg: resDev
                    });
                }
            }
        });
    }
});
module.exports = router;