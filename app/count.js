exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var timeout;
    function doIt () {
      console.log(start++);
      if(start <= end) {
        timeout = setTimeout(doIt, 100);
      }
    }
    doIt();
    return {
      cancel: function() {
        timeout && clearTimeout(timeout);
      }
    };


    // var i = 0;
    // do {
    //    i += 1;
    //    console.log(i);
    // } while (i < 5);
  }
};
