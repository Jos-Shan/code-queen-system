var mongoose = require('mongoose');

const dbPath = 'mongodb://localhost:27017/code_queen';
const options = {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true
};

//default connection
var db = mongoose.connect(dbPath, options);

//connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));