//jshint esversion:6

module.exports.reverseNumber = (x) => {
  var s = x + "";
  var y = s.split("").reverse().join("");
  return y;
};
