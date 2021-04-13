
var mongoose = require('mongoose');

mongoose.connect(process.env.DB_PATH, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true
})
.then ((res) => {
    console.log("MongoDB Connected");
  });
  

