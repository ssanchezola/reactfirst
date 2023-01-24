const mongoose = require('mongoose');

//mongoose.set('strictQuery', false);

const URI= 'mongodb+srv://ssanchezola:EpJSgRVqBXJK9teO@hipisoft.mtvfboq.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(db => console.log("DB is connected"))
  .catch(err => console.error(err));


module.exports = mongoose;