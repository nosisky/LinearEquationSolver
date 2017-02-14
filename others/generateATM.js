function atm() {
  var ask = prompt("give amount");
  var mine = [];
  var conc = " ";
  var conc2 = conc;
  for(var i = 1; i <= ask; i++) {
    for(var j = 1; j <= 4; j++) {
      var pin = Math.floor(Math.random() * 10);
      conc += pin;
      }
      // for(var m = 0; m <= mine.length; m++) {
      //   if(mine[m] != conc) {
      //     mine.push(conc);
      //   }
      // }
      mine.push(conc);
      var conc = conc2;
  }
console.log(mine);
}
atm();

