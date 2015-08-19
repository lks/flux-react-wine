/**
 * Created by j.calabrese on 8/19/15.
 */
var FirebaseUtils = {
  convertToArray: function (objectToConvert) {
    var list = [];
    for (var i = 0; i<Object.keys(objectToConvert).length; i++){
      list.push(objectToConvert[Object.keys(objectToConvert)[i]]);
    }
    return list;
  }
};
module.exports = FirebaseUtils;