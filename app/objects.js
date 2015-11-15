exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.call(obj);
  },
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor

  iterate : function(obj) {
    var itr = [];
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        itr.push(prop + ': ' + obj[prop]);
      }
    }
    return itr;
  }
};
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
