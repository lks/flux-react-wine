var request = require('superagent');
var FirebaseUtils = require('../utils/firebase-utils');
var Promise = require('es6-promise').Promise; // jshint ignore:line

var Api = {
  getAllWineData: function() {
    return new Promise(function (resolve, reject) {
      request
        .get("https://wineiscool.firebaseio.com/wines.json")
        .set('Content-Type', 'application/json')
        .end(function (res) {
          if (res.status === 404) {
            reject();
          } else {
            resolve(FirebaseUtils.convertToArray(res.body));
          }
        });
    });
  },

  addWineData: function(wine) {
    return new Promise(function (resolve, reject) {
      request
        .post("https://wineiscool.firebaseio.com/wines.json")
        .set('Content-Type', 'application/json')
        .send(wine)
        .end(function (res) {
          if (res.status === 404) {
            reject();
          } else {
            resolve(res.body);
          }
        });
    });
  }
};

module.exports = Api;
