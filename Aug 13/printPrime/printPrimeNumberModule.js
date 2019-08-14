//jshint esversion:6
module.exports.printPrimeNumber = () => {
  var s = "";

  for (i = 1; i <= 500; i++) {
    c = 0;
    for (j = 1; j <= i; j++) {
      if (i % j == 0) {
        c++;
      }
    }
    if (c == 2) {
      s += i + " ";
    }
  }
  return s;
};
