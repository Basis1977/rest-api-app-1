const mongoose = require('mongoose');
var request = require('request');

module.exports = (req, res, next) => {
  var omdbUrl = 'http://www.omdbapi.com?'
  var queryObject = {
      t: req.body.title,
      y: req.body.year,
      plot: req.body.plotVersion,
      apikey: 'f3235420'
  }
  
  request({
      url:omdbUrl,
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