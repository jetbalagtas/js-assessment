exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },
  // ^ MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
  // Thanks also to shuckster: http://stackoverflow.com/questions/1316371/converting-a-javascript-array-to-a-function-arguments-list

  speak : function(fn, obj) {
    return fn.call(obj);
  },
  // ^ Thanks to Anurag:  http://stackoverflow.com/questions/5334611/changing-the-context-of-a-function-in-javascript

  functionFunction : function(str) {
    return function(args) {
      return str + ', ' + args;
    };
  },

  makeClosures : function(arr, fn) {
    var outerFuncVar = [];
    var innerFunc = function(currVal) {
      return function () {
        return fn(currVal);
      };
    };
    for (var i = 0; i < arr.length; i++) {
      outerFuncVar.push(innerFunc(arr[i]));
    }
    return outerFuncVar;
  },
  // http://javascriptissexy.com/understand-javascript-closures-with-ease/
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

  partial : function(fn, str1, str2) {
    return function innerFunc(a) {
      return fn.call(null, str1, str2, a);
      };
  },
  // Stoyan Stefanov: "When you perform a partial application, you don't get a result (a solution), but you get another function instead."
  // "Note that in addition to apply(), there's a call() method of the Function.prototype object, but it's still just syntax sugar on top of apply(). Sometimes it's better to use the sugar: When you have a function that takes only one parameter, you can save the work of creating arrays with just one element"
  // http://www.drdobbs.com/open-source/currying-and-partial-functions-in-javasc/231001821
  // http://stackoverflow.com/questions/11659134/applying-a-function-to-null-in-javascript

  useArguments : function() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    console.log(sum);
    return sum;
  },

  callIt : function(fn) {
    var arbitraryArgs = Array.prototype.slice.call(arguments, 1, arguments.length);
      fn.apply(null, arbitraryArgs);
  },
  // http://www.jtricks.com/javascript_tutorials/varargs.html
  // http://stackoverflow.com/questions/7056925/how-does-array-prototype-slice-call-work

  partialUsingArguments : function(fn) {
    var arbitraryArgs = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function () {
      var variableArgs = arbitraryArgs.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, variableArgs);
    };
  },
  // http://stackoverflow.com/questions/7056925/how-does-array-prototype-slice-call-work

  curryIt : function(fn) {

  }
};
