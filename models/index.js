const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/myndex", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected...');
})

mongoose.connection.on('error', (error) => {
  console.log(error);
})

module.exports = {
  Myndex: require('./myndex'),
  User: require('./User')
}


//2020-12-11T05:58:06.187536+00:00 heroku[web.1]: Process exited with status 143
//2020-12-11T05:58:06.187536+00:00 heroku[web.1]: Process exited with status 143
