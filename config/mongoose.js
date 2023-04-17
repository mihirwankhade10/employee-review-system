
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// aquire connection if it is succesful
const db = 'mongodb+srv://wankhadeabhi3:abhi123456@cluster0.jhzupam.mongodb.net/?retryWrites=true&w=majority';
// connect from mongodb
// mongoose.connect('mongodb://127.0.0.1:27017/Review-System');
   mongoose.connect(db).then(() => {
    console.log(`Connection is succesfull`);
   }).catch((err) => console.log(`no Connection`));
module.exports = db;