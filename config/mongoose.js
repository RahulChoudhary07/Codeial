const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://<username>:<password>@codeialcluster.cu2wt.mongodb.net/platformDatabase?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("**************connected to db successfully*************")
});

module.exports = db;