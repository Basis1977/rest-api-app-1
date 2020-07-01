const mongoose = require('mongoose');
var request = require('request');

module.exports = (req, res, next) => {
  var openlibUrl = 'https://openlibrary.org/api/books?'
  var queryObject = {
      bibkeys: req.body.isbn.indexOf('ISBN') != -1 ? req.body.isbn : 'ISBN:'.concat(req.body.isbn),
      jscmd: 'details',
      format: 'json'
  }
  
  request({
      url:openlibUrl,
      qs: queryObject
  }, function (error, response, body) {
      if (error) {
        return next({ status: 404, message: 'Movie does not exist.' });
      }   
      res.json({
        success: true,
        message: 'Success',
        data: JSON.parse(body)
      });
  });
};