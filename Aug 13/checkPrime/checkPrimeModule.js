//jshint esversion:6
module.exports.primeCheck = (x) => {

    var c = 0;
    for(var j =1; j <= x; j++){
      if(x%j == 0){
        c++;
      }
    }

    if(c == 2){
      console.log(x + " is a Prime number!");
    }else{
      console.log(x + " is not a Prime Number.");
    }

};
