exports = (typeof window === 'undefined') ? global : window;

exports.logicalOperatorsAnswers = {
  or : function(a, b) {
    return a || b;
  },

  and : function(a, b) {
    return a && b;
  }
};
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators
