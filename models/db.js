var express = require('express');
var mongoose = require('mongoose');

const dbPath = 'mongodb://localhost:27017/code-queen-db';
const options = {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true
};

//default connection
mongoose.connect(dbPath, options);