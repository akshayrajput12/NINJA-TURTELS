const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Connect to the database
mongoose.connect('mongodb://localhost:27017/fitness', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a schema for user data
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  username: String,
  password: String
});

// Create a model for user data
const User = mongoose.model('User', UserSchema);

// Set up body-parser and ejs
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Handle the registration form submission
app.post('/register', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    username: req.body.username,
    password: req.body.password
  });

  newUser.save()
    .then(() => res.redirect('/'))
    .catch(err => res.status(400).send("Unable to save user: " + err));
});

// Set up routes
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => console.log('Server is running on port 3000'));