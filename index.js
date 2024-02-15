const express = require('express');
const homeRoute = require('./routes/home');
const mongoose = require('mongoose');
const inventory =require('./models/newInventory');
//const keys = require('./config/keys');
const bodyParser = require('body-parser');
const path = require('path');


const app = express()

const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/361', {useNewUrlParser:true});
const db = mongoose.connection;
db.on('error', ()=>{
  console.log("Connection cannot be established");
});
db.once('open',()=>{
  console.log("DB connection successful");
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/home', (req, res) => {
  res.render('home');
});

app.get('/inventory', (req, res) => {
  // You should pass the inventories data when rendering the inventory page
  //const inventories = /* logic to retrieve inventories from the database */;
  res.render('inventory', { inventory });
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/', homeRoute);



// Set the views directory and view engine



// Define routes



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})