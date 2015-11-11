exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var total = 0;
    arr.forEach(function (el, idx, arr) {
      total += el;
    });
    return total;
  },

  remove : function(arr, item) {
    arr.forEach(function(currVal, idx, arr) {
      if(currVal === item) {
        arr.splice(idx, 1);
      }
    });
    console.log(arr.length);
    console.log(arr);
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    arr.forEach(function(currVal, idx, arr) {
      if(currVal === item) {
        arr.splice(idx, 2);
      }
    });
    console.log(arr.length);
    console.log(arr);
    return arr;
  },

  append : function(arr, item) {
    arr.push(10);
    console.log(arr);
    console.log(arr.length);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    console.log(arr.length);
    console.log(arr);
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(10);
    console.log(arr.length);
    console.log(arr);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    console.log(arr.length);
    console.log(arr);
    return arr;
  },

  concat : function(arr1, arr2) {
    var joinedArrs = arr1.concat(arr2);
    console.log(joinedArrs);
    console.log(joinedArrs.length);
    return joinedArrs;
  },

  insert : function(arr, item, index) {
    var arrWithInsertedItem = arr.splice(2, 0, 'z');
    console.log(arr.length);
    console.log(arr);
    return arr;
  },

  count : function(arr, item) {
    var sameItems = 0;
    arr.forEach(function(currVal) {
      if(currVal === item) {
        sameItems++;
      }
    });
    console.log(sameItems);
    return sameItems;
  },

  duplicates : function(arr) {
    var sameItems = 0;
    arr.forEach(function(currVal) {
      if(currVal === item) {
        sameItems++;
      }
    });
  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
