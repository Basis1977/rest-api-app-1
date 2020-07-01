const routes = require('express').Router();
const bodyParser = require('body-parser');

// Require routes
const auth = require('./auth');
const user = require('./user');
const omdb = require('./omdb');
const openlib = require('./openlib');

// configure app to use bodyParser()
// this will let us get the data from a POST
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

routes.use((req, res, next) => {
  // do logging
  console.log(`Resource requested: ${req.method} ${req.originalUrl}`);
  next(); // make sure we go to the next routes and don't stop here
});

routes.use('/auth', auth);
routes.use('/user', user);
routes.use('/omdb', omdb);
routes.use('/openlib', openlib);


routes.get('/', function(req, res, next) {
   res.render('index', { title: 'Rest API App', condition: false });
});

routes.get('/signup', function(req, res, next) {
  res.render('signup');
});

routes.get('/movie', function(req, res, next) {
  res.render('movie');
});

routes.get('/book', function(req, res, next) {
  res.render('book');
});

/* Handle Logout */
routes.get('/signout', function(req, res) {
  req.logout();
  res.redirect('/');
});


module.exports = routes;
