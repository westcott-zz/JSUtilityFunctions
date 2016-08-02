var dsw_jsUtils = (function () {
  'use strict';
  var s = {};

  // flattenArrayOfObjects takes an array of objects and returns an array with one object
  // Note: last object key value wins
  // dsw_jsUtils.flattenArrayOfObjects([{foo1:1},{foo2:'loser'},{foo2:'winner'}]);
  // returns [{foo1:1,foo2:'winner'}]
  s._flattenArrayOfObjects = function(array) {
    var _array = array,
        _obj = {};

    _array.forEach(function(obj,i) {
      if (typeof obj === "object") {
        Object.keys(obj).forEach(function(key,j) {
          _obj[key] = obj[key];
        });
      }
    });
    return [_obj];
  }

  return {
    flattenArrayOfObjects : s._flattenArrayOfObjects
  };
  
}());
