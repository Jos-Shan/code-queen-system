
var mongoose = require('mongoose');

//const DB_PATH = 'mongodb://localhost:27017/code-queen-db';

mongoose.connect(process.env.DB_PATH, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true
})
.then ((res) => {
    console.log("MongoDB Connected");
  });
  

