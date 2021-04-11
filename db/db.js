
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true
})
.then ((res) => {
    console.log("MongoDB Connected");
  });
  

